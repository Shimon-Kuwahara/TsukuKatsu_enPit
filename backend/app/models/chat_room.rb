class ChatRoom < ApplicationRecord
  belongs_to :user
  belongs_to :company
  belongs_to :recruitment
  has_many :messages, dependent: :destroy
end
