class CreateApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :applications do |t|
      t.references :user, null: false, foreign_key: true
      t.references :recruitment, null: false, foreign_key: true
      t.integer :status, null: false, default: 0
      t.timestamps
    end

    # 同じ求人に対して同じユーザーが複数回応募できないようにする
    add_index :applications, [:user_id, :recruitment_id], unique: true
  end
end
