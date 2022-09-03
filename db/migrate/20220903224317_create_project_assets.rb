class CreateProjectAssets < ActiveRecord::Migration[6.1]
  def change
    create_table :project_assets do |t|
      t.belongs_to :project, null: false, foreign_key: true
      t.belongs_to :asset, null: false, foreign_key: true

      t.timestamps
    end
  end
end
