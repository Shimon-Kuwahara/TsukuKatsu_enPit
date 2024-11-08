class CreateCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.text :description
      t.string :website_url
      t.string :location
      t.string :email
      t.string :phone_number

      t.timestamps
    end
  end
end
