class Project < ApplicationRecord
  belongs_to :user
  has_many :project_assets, dependent: :destroy
  has_many :assets, through: :project_assets
  has_one_attached :image_data

  validates :name, presence: true, uniqueness: true
end
