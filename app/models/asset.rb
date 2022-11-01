class Asset < ApplicationRecord
  belongs_to :user
  has_many :project_assets, dependent: :destroy
  has_many :projects, through: :project_assets
 
  has_one_attached :image_data

  validates :title, :source, presence: true
end
