class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :belongs_to, :name, :status, :summary
end
