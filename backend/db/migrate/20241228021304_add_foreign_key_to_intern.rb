class AddForeignKeyToIntern < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :interns, :recruitments, column: :recruitment_id
  end
end
