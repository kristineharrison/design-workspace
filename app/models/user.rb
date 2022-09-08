class User < ApplicationRecord
  has_secure_password
  
  has_many :projects
  has_many :assets
  has_one_attached :avatar_data

  validates :username, :email, :first_name, :last_name, presence: true
  validates :username, :email, uniqueness: true

end
