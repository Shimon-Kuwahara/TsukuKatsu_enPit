class RemoveDefaultFromOccupationInRecruitments < ActiveRecord::Migration[7.0]
  def change
    change_column_default :recruitments, :occupation, from: "0", to:  nil
  end
end
