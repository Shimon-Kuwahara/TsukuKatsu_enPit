class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:mypage]

  def index
    @users = User.all
    render json: @users
  end

  def mypage
    if current_user
      render json: current_user
    else
      render json: { status: 'error', message: 'ログインが必要です' }, status: :unauthorized
    end
  end
end
