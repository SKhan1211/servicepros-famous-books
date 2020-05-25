json.array! @books do |book|
  json.extract! book, :id, :title, :author, :year, :isbn, :publisher, :description, :categories, :price, :rating, :image
end