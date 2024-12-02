class ChangeWageToIntegerInRecruitments < ActiveRecord::Migration[7.0]
  def up
    change_column :recruitments, :wage, 'integer USING CAST(wage AS integer)', null: false
  end

  def down
    change_column :recruitments, :wage, :string, null: false
  end
end
