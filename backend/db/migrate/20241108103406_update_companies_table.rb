class UpdateCompaniesTable < ActiveRecord::Migration[6.0]
  def change
    change_table :companies, bulk: true do |t|
      t.string :logo_url, default: ''
      t.string :picture_url, default: ''
      t.change :name, :string, null: false
      t.change :description, :text, null: false
      t.change :website_url, :string, null: false
      t.change :location, :string, null: false
      t.change :email, :string, null: false
      t.change :phone_number, :string, null: false
    end
  end
end
