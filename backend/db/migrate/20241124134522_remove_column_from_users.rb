class RemoveColumnFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :postal_code, :string
    remove_column :users, :city, :string
    remove_column :users, :phone_number, :string
    remove_column :users, :birth_place, :string
    remove_column :users, :nationality, :string
    remove_column :users, :achievement, :text
    remove_column :users, :experience, :text
    remove_column :users, :github, :string
    remove_column :users, :portfolio, :string
    remove_column :users, :desired_workplace, :integer
    remove_column :users, :desired_company_size, :integer
    remove_column :users, :desired_job, :integer
  end
end
