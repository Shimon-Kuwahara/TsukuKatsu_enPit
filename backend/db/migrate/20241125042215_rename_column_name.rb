class RenameColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :prefecture_id, :prefecture
  end
end
