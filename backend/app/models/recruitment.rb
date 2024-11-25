class Recruitment < ApplicationRecord
  belongs_to :company
  has_many :applications, dependent: :destroy
end
