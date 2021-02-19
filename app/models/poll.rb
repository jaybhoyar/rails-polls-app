class Poll < ApplicationRecord
  validates :question, presence: true, length: { maximum: 50 }
  belongs_to :user

  has_many :options, dependent: :destroy
  accepts_nested_attributes_for :options
end
