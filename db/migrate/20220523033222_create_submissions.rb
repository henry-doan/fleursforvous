class CreateSubmissions < ActiveRecord::Migration[7.0]
  def change
    create_table :submissions do |t|
      t.string :fullName
      t.string :email
      t.string :phone
      t.string :occasion
      t.string :dateNeeded
      t.string :timeNeeded
      t.string :colors
      t.string :priceRange
      t.string :flowers
      t.text :specialRequirements
      t.boolean :complete

      t.timestamps
    end
  end
end
