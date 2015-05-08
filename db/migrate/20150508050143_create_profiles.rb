class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :origin
      t.string :location_pic
      t.text :comment
      t.references :user
      t.timestamps null: false
    end
  end
end
