class User < ApplicationRecord
  has_many :polls, dependent: :destroy
  has_many :votes, dependent: :destroy
  
  has_secure_token :authentication_token
  has_secure_password

  validates :username, presence: true,
                    uniqueness: true,
                    length: { maximum: 20 },
                    format: { with: /\A[a-zA-Z0-9]+\Z/ }
  validates :password, presence: true, confirmation: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true, on: :create
end
