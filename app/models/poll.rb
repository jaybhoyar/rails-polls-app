class Poll < ApplicationRecord
  belongs_to :user
  has_many :options, dependent: :destroy
  accepts_nested_attributes_for :options


  validates :question, presence: true, length: { maximum: 50 }
  validates :user_id, presence: true
end
