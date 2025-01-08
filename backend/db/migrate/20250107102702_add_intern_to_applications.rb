class AddInternToApplications < ActiveRecord::Migration[7.0]
  def change
    add_reference :applications, :interns, foreign_key: true
  end
end
