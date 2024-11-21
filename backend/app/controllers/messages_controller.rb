class MessagesController < ApplicationController
  before_action :set_chat_room
  before_action :authenticate_user_or_company!

  def create
    message = @chat_room.messages.new(message_params)
    message.sender = current_user || current_company

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
