class ModifyRecruitmentsColumns < ActiveRecord::Migration[7.0]
  def change
    # min_weekly_hours の削除
    remove_column :recruitments, :min_weekly_hours, :string

    # min_work_month -> min_month
    rename_column :recruitments, :min_work_month, :min_month

    # min_work_days -> min_days
    rename_column :recruitments, :min_work_days, :min_days

    # min_work_hours -> min_hours
    rename_column :recruitments, :min_work_hours, :min_hours
  end
end
