# frozen_string_literal: true

class User < ActiveRecord::Base
  enum gender: { 男性: 0, 女性: 1, その他: 2 }
  enum grade: { 学部一年: 0, 学部二年: 1, 学部三年: 2, 学部四年: 3, 修士一年: 4, 修士二年: 5, 博士一年: 6, 博士二年: 7, 博士三年: 8 }
  enum university: { 筑波大学: 0, 筑波大学大学院: 1, 筑波技術大学: 2 }
  enum desired_company_size: { small: 0, medium: 1, large: 2 } #適切に書き換える
  enum desired_job: { engineer: 0, designer: 1, product_manager: 2 } #適切に書き換える

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_many :reviews, dependent: :destroy
  has_many :applications, dependent: :destroy
end
