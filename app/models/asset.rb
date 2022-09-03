class Asset < ApplicationRecord
  has_many :project_assets, dependent: :destroy
  has_many :projects, through: :project_assets
end
