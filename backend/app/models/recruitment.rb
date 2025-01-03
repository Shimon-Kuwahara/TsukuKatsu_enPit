class Recruitment < ApplicationRecord
  belongs_to :company
  belongs_to :user
  has_many :interns
end
