class MessagesController < ApplicationController
  before_action :set_chat_room
  before_action :authenticate_user_or_company!

  def create
    message = @chat_room.messages.new(message_params)
    # current_user と current_company を明確に判定
    if current_user
      message.sender = current_user
    elsif current_company
      message.sender = current_company
    else
      render json: { error: '認証が必要です' }, status: :unauthorized
      return
    end

    if message.save
      render json: message, status: :created
    else
      render json: message.errors, status: :unprocessable_entity
    end
  end


  private

  def set_chat_room
    @chat_room = ChatRoom.find(params[:chat_room_id])
  end

  def message_params
    params.require(:message).permit(:content)
  end

  def authenticate_user_or_company!
    unless @chat_room.user_id == current_user&.id || @chat_room.company_id == current_company&.id
      render json: { error: 'アクセス権がありません' }, status: :forbidden
    end
  end
end
