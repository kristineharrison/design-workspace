class Project < ApplicationRecord
  belongs_to :user
  has_many :project_assets, dependent: :destroy
  has_many :assets, through: :project_assets

  validates :name, presence: true, uniqueness: true
end
