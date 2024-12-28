class RemoveJobDescriptionFromRecruitments < ActiveRecord::Migration[7.0]
  def change
    remove_column :recruitments, :job_titles, :text
  end
end
