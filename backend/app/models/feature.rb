class Feature < ApplicationRecord
  has_many :intern_features
  has_many :interns, through: :intern_features
end
