class CreateAssets < ActiveRecord::Migration[6.1]
  def change
    create_table :assets do |t|
      t.string :title
      t.string :source
      t.text :description
      t.string :tags
      t.belongs_to :user, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
