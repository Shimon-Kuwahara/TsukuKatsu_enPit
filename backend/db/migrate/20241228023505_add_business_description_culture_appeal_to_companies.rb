class AddBusinessDescriptionCultureAppealToCompanies < ActiveRecord::Migration[7.0]
  def change
    add_column :companies, :business_description, :text, default: "" ,null: false
    add_column :companies, :culture, :text, default: "",  null: false
    add_column :companies, :appeal, :text, default: "" , null: false
  end
end
