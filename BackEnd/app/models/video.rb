class Video < ApplicationRecord
  belongs_to :list
  has_many :videos, through: :lists
end
