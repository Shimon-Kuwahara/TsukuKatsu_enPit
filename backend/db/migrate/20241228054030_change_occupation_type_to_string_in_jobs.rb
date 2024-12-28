class ChangeOccupationTypeToStringInJobs < ActiveRecord::Migration[7.0]
  def change
    change_column :recruitments, :occupation, :string
  end
end
