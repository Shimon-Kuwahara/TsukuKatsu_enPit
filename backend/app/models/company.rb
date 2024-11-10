class Company < ApplicationRecord
        has_many :recruitments, dependent: :destroy

        # Include default devise modules.
        devise :database_authenticatable, :registerable,
                :recoverable, :rememberable, :validatable
        include DeviseTokenAuth::Concerns::User
end
