class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :status, :summary
  
end
