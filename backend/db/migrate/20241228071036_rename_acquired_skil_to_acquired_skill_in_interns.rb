class RenameAcquiredSkilToAcquiredSkillInInterns < ActiveRecord::Migration[7.0]
  def change
    rename_column :interns, :acquired_skil, :acquired_skill
  end
end
