class ChatRoomsController < ApplicationController
  before_action :authenticate_user_or_company!

  def create
    chat_room = ChatRoom.find_or_create_by(
      user_id: current_user.id,
      company_id: params[:company_id],
      recruitment_id: params[:recruitment_id]
    )

    # 特別な応募メッセージを作成
    chat_room.messages.create(
      sender: current_user,
      content: "応募させていただきます。よろしくお願いいたします。"
    )

    render json: chat_room, status: :created
  end

  def index
    if current_user
      chat_rooms = ChatRoom.includes(:company).where(user_id: current_user.id)
    elsif current_company
      chat_rooms = ChatRoom.includes(:user).where(company_id: current_company.id)
    end

    render json: chat_rooms.as_json(include: [:company, :user])
  end

  def show
    chat_room = ChatRoom.includes(:company, :user, messages: [:sender]).find(params[:id])
    if chat_room.user_id == current_user&.id || chat_room.company_id == current_company&.id
      render json: chat_room.as_json(
        include: {
          messages: { include: :sender },
          company: {},
          user: {},
          recruitment: {}
        }
      )
    else
      render json: { error: 'アクセス権がありません' }, status: :forbidden
    end
  end

  private

  def authenticate_user_or_company!
    authenticate_user! unless current_user || current_company
  end
end
