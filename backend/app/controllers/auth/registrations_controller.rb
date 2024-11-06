module Auth
  class RegistrationsController < DeviseTokenAuth::RegistrationsController
    private

    # サインアップ時の許可パラメータを追加
    def sign_up_params
      params.permit(
        :email, :password, :password_confirmation, :last_name, :first_name,
        :last_name_kana, :first_name_kana, :gender, :university_id,
        :department, :grade, :graduation_year, :graduation_month
      )
    end
  end
end
