# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :reviews, dependent: :destroy
  has_many :recruitments
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  enum gender: { 男性: 0, 女性: 1, その他: 2 }
  enum grade: { 学部1年: 0, 学部2年: 1, 学部3年: 2, 学部4年: 3, 修士1年: 4, 修士2年: 5, 博士1年: 6, 博士2年: 7, 博士3年: 8 }
  enum university: { 筑波大学: 0, 筑波大学大学院: 1, 筑波技術大学: 2 }
  enum desired_company_size: { small: 0, medium: 1, large: 2 } # 適切に書き換える
  enum desired_job: { engineer: 0, designer: 1, product_manager: 2 } # 適切に書き換える

  # [TODO] 定義する場所を変える
  enum prefecture: {
    北海道: 0,
    青森県: 1,
    岩手県: 2,
    宮城県: 3,
    秋田県: 4,
    山形県: 5,
    福島県: 6,
    茨城県: 7,
    栃木県: 8,
    群馬県: 9,
    埼玉県: 10,
    千葉県: 11,
    東京都: 12,
    神奈川県: 13,
    新潟県: 14,
    富山県: 15,
    石川県: 16,
    福井県: 17,
    山梨県: 18,
    長野県: 19,
    岐阜県: 20,
    静岡県: 21,
    愛知県: 22,
    三重県: 23,
    滋賀県: 24,
    京都府: 25,
    大阪府: 26,
    兵庫県: 27,
    奈良県: 28,
    和歌山県: 29,
    鳥取県: 30,
    島根県: 31,
    岡山県: 32,
    広島県: 33,
    山口県: 34,
    徳島県: 35,
    香川県: 36,
    愛媛県: 37,
    高知県: 38,
    福岡県: 39,
    佐賀県: 40,
    長崎県: 41,
    熊本県: 42,
    大分県: 43,
    宮崎県: 44,
    鹿児島県: 45,
    沖縄県: 46
  }
end
