class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :proname, :prostatus, :summary, :assets

  has_many :assets
  
end
