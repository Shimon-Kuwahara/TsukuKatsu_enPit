class CreateChatRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :chat_rooms do |t|
      t.references :user, foreign_key: true
      t.references :company, foreign_key: true
      t.references :recruitment, foreign_key: true

      t.timestamps
    end
  end
end
