class Project < ApplicationRecord
  belongs_to :user
  has_many :project_assets, dependent: :destroy
  has_many :assets, through: :project_assets

  validates :proname, :prostatus, :summary, presence: true
  validates :proname, uniqueness: true
end
