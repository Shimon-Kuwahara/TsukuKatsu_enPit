class CreateInternFeatures < ActiveRecord::Migration[7.0]
  def change
    create_table :intern_features do |t|
      t.references :intern, foreign_key: true
      t.references :feature, foreign_key: true

      t.timestamps
    end
  end
end
