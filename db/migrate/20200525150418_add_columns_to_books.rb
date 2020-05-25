class AddColumnsToBooks < ActiveRecord::Migration[6.0]
  def change
    add_column :books, :author, :string
    add_column :books, :year, :string
    add_column :books, :isbn, :string
    add_column :books, :publisher, :string
  end
end
