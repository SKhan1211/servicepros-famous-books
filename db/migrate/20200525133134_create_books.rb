class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.text :description
      t.text :categories, array: true, default: []
      t.float :price
      t.integer :rating
      t.string :image

      t.timestamps
    end

    add_index :books, :title
    add_index :books, :image
  end
end
