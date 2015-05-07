class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :movie
      t.string :location
      t.references :user
      t.timestamps null: false
    end
  end
end
