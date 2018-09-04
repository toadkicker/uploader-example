class CreateWidgets < ActiveRecord::Migration[5.2]
  def change
    create_table :widgets do |t|
      t.string :title
      t.string :photo_data

      t.timestamps
    end
  end
end
