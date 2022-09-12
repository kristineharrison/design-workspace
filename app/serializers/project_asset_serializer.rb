class ProjectAssetSerializer < ActiveModel::Serializer
  attributes :id
  has_one :asset
end