class AddColumnToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :programing_experience, :text
    add_column :users, :design_experience, :text
    add_column :users, :internship_experience, :text
    add_column :users, :achievement_url, :text
    add_column :users, :past_efforts, :text
    add_column :users, :future_goals, :text
    add_column :users, :desired_industry, :jsonb, default: [], null: false
    add_column :users, :desired_job, :jsonb, default: [], null: false
    add_column :users, :desired_job_location, :jsonb, default: [], null: false
    add_column :users, :desired_company_size, :jsonb, default: [], null: false
  end
end
