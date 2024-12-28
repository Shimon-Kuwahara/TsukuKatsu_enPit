class CreateApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :applications do |t|
      t.references :user, foreign_key: true
      t.references :recruitment, foreign_key: true

      t.timestamps
    end
  end
end
