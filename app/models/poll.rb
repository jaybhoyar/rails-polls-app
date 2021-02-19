class Poll < ApplicationRecord
  validates :question, presence: true, length: { maximum: 50 }
  belongs_to :user
end
