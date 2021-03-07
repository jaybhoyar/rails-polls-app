class Option < ApplicationRecord
  belongs_to :poll
  validates :value, presence: true
end
