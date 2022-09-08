class ProjectSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :status, :summary

  def image_data
    rails_blob_path(object.image_data, only_path: true) if object.image_data.attached?
  end
  
end
