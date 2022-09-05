class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :username, :email, :first_name, :last_name, :password_digest

  def avatar_data
    rails_blob_path(object.avatar_data, only_path: true) if object.avatar_data.attached?
  end
end
