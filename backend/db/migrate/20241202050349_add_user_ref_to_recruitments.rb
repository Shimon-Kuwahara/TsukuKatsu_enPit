class AddUserRefToRecruitments < ActiveRecord::Migration[7.0]
  def change
    add_reference :recruitments, :user, foreign_key: true
  end
end
