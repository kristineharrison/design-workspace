class ProjectAssetSerializer < ActiveModel::Serializer
  attributes :id
  has_one :project
  has_one :asset
end