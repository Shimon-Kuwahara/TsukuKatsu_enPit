module Auth
  class RegistrationsCompanyController < DeviseTokenAuth::RegistrationsController

    def create
      super do |resource|
        Rails.logger.error(resource.errors.full_messages) if resource.errors.any?
      end
    end

    private

    # サインアップ時の許可パラメータを追加
    def sign_up_params
      params.permit(
        :email, :password, :password_confirmation, :name, :description,
        :website_url, :location, :phone_number
      )
    end
  end
end