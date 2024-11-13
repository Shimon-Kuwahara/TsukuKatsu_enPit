class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :user, null: false, foreign_key: true
      t.references :company, null: false, foreign_key: true
      t.text :job_description, null: false
      t.text :joining_reason_gap
      t.text :work_life_balance
      t.text :work_environment
      t.text :selection_process
      t.text :work_atmosphere
      t.text :intern_relations
      t.text :support
      t.timestamps
    end
  end
end
