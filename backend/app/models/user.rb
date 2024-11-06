# frozen_string_literal: true

class User < ActiveRecord::Base
  enum gender: { male: 0, female: 1, other: 2 }
  enum grade: { freshman: 0, sophomore: 1, junior: 2, senior: 3 }
  enum desired_company_size: { small: 0, medium: 1, large: 2 }
  enum desired_job: { engineer: 0, designer: 1, product_manager: 2 }
  enum graduation_month: {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12
  }

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
end
