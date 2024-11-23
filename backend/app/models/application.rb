class Application < ApplicationRecord
  belongs_to :user
  belongs_to :recruitment

  enum status: {
    in_progress: 0,
    approved: 1,
    rejected: 2
  }

  validates :user_id, presence: true
  validates :recruitment_id, presence: true
end
