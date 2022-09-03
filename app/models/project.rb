class Project < ApplicationRecord
  belongs_to :user
  has_many :project_assets
  has_many :assets, through: :project_assets
end
