class UsersController < ApplicationController
  before_action :authenticate_user!, only: %i[mypage update]

  # [TODO:修正]認証なしで全ユーザー情報を取得できちゃうのやばそう
  def index
    @users = User.all
    render json: @users
  end

  def update
    if current_user.update(user_params)
      render json: current_user
    else
      render json: { status: 'error', message: current_user.errors.full_messages }, status: :unprocessable
    end
  end

  def mypage
    if current_user
      render json: current_user
    else
      render json: { status: 'error', message: 'ログインが必要です' }, status: :unauthorized
    end
  end

  private

  def user_params
    basic_attributes = %i[last_name first_name last_name_kana first_name_kana gender birth_date
                          prefecture]
    academic_attributes = %i[grade university department graduation_year graduation_month]
    experience_attributes = %i[programing_experience disign_experience internship_experience]
    personal_attributes = %i[qualification achievement_url past_efforts future_goals]
    preference_attributes = %i[desired_location desired_company_size desired_job desired_industry]

    params.require(:user).permit(
      *basic_attributes,
      *academic_attributes,
      *experience_attributes,
      *personal_attributes,
      *preference_attributes
    )
  end
end
