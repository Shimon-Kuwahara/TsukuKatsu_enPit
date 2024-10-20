class CreateCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :companies do |t|
      t.string :image
      t.string :name
      t.string :student_name
      t.string :student_info
      t.text :description
      t.string :detail_link

      t.timestamps
    end
  end
end
