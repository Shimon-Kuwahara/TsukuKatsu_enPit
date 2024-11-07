class AddFieldsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :last_name, :string, null: false
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name_kana, :string, null: false
    add_column :users, :first_name_kana, :string, null: false
    add_column :users, :gender, :integer, null: false # Enumとして設定
    add_column :users, :university, :integer, null: false
    add_column :users, :department, :string, null: false
    add_column :users, :grade, :integer, null: false # Enumとして設定
    add_column :users, :graduation_year, :integer, null: false
    add_column :users, :graduation_month, :integer, null: false # Enumとして設定
    add_column :users, :postal_code, :string
    add_column :users, :prefecture_id, :integer
    add_column :users, :city, :string
    add_column :users, :phone_number, :string
    add_column :users, :birth_place, :string
    add_column :users, :nationality, :string
    add_column :users, :birth_date, :date
    add_column :users, :achievement, :text
    add_column :users, :experience, :text
    add_column :users, :github, :string
    add_column :users, :portfolio, :string
    add_column :users, :qualification, :text
    add_column :users, :desired_workplace, :integer
    add_column :users, :desired_company_size, :integer # Enumとして設定
    add_column :users, :desired_job, :integer # Enumとして設定
  end
end
