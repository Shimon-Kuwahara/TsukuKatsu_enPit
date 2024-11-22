class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.references :chat_room, foreign_key: true
      t.references :sender, polymorphic: true
      t.text :content

      t.timestamps
    end
  end
end
