class AssetSerializer < ActiveModel::Serializer
  attributes :id, :title, :source, :description, :keywords
end
