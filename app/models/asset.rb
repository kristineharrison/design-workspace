class Asset < ApplicationRecord
  has_many :project_assets, dependent: :destroy
  has_many :projects, through: :project_assets
  has_one_attached :image_data

  validates :title, presence: true
end
