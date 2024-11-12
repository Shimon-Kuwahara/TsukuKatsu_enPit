class Company < ApplicationRecord
        has_many :recruitments, dependent: :destroy

        # Include default devise modules.
        devise :database_authenticatable, :registerable,
                :recoverable, :rememberable, :validatable
        include DeviseTokenAuth::Concerns::User

        def token_validation_response
                as_json(only: [:id, :email])
        end
end
