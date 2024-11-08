class UpdateRecruitmentsTable < ActiveRecord::Migration[6.0]
  def change
    change_table :recruitments, bulk: true do |t|
      t.bigint :company_id, null: false
      t.string :industry, null: false
      t.text :benefits, null: false
      t.text :job_description, null: false
      t.text :job_titles, null: false
      t.boolean :job_engineer, null: false, default: false
      t.boolean :job_designer, null: false, default: false
      t.boolean :job_sales, null: false, default: false
      t.boolean :job_planning, null: false, default: false
      t.boolean :job_marketing, null: false, default: false
      t.boolean :job_writer, null: false, default: false
      t.boolean :job_others, null: false, default: false
      t.text :skills_acquired, null: false
      t.string :wage, null: false
      t.text :salary_notes, null: false
      t.string :work_location, null: false
      t.string :min_work_period, null: false
      t.string :min_work_days, null: false
      t.string :min_work_hours, null: false
      t.string :commute_support, null: false
      t.text :required_skills, null: false
      t.text :welcome_skills, null: false
      t.string :promotion_system, null: false
      t.string :remote_policy, null: false
      t.text :selection_flow, null: false
      t.string :deadline, null: false
      t.text :welfare_benefits, null: false
      t.string :apply_url, null: false
    end
    add_foreign_key :recruitments, :companies, column: :company_id
  end
end
