class CreateInterns < ActiveRecord::Migration[7.0]
  def change
    create_table :interns do |t|
      t.string :nickname, null: false
      t.integer :department, null: false
      t.integer :grade, null: false
      t.string :labo
      t.string :club
      t.text :achievements
      t.text :experience
      t.string :company_name
      t.text :intern_detail, null: false
      t.text :work_duration_description
      t.text :weekly_hours_description
      t.text :hourly_wage_description
      t.text :work_style
      t.text :application_reason
      t.text :acquired_skil
      t.text :appeal
      t.text :advise
      t.integer :evaluation
      t.text :evaluation_reason
      t.text :intern_overview, null: false
      t.text :catchphrase, null: false
      t.integer :hourly_wage
      t.integer :weekly_hours
      t.integer :work_duration
      t.integer :industry, null: false
      t.integer :occupation, null: false
      t.integer :recruitment_id

      t.timestamps
    end
  end
end
