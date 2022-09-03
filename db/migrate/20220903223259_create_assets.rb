class CreateAssets < ActiveRecord::Migration[6.1]
  def change
    create_table :assets do |t|
      t.string :title
      t.string :source
      t.text :description
      t.string :keywords

      t.timestamps
    end
  end
end
