class AddImageUrlToAsset < ActiveRecord::Migration[6.1]
  def change
    add_column :assets, :image_url, :string
  end
end
