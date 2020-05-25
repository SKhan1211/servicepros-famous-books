# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'httparty'
require 'byebug'

def seedBookInfo()
  spApiResponse = JSON.parse(HTTParty.get('https://servicepros-test-api.herokuapp.com/api/v1/books').body) # Get data from Service Pros Book API
  spApiResponse.each do |book|
    title = book['title']
    author = book['author']
    year = book['year']
    isbn = book['isbn']

    googleBooksResponse = JSON.parse(HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=intitle:#{title}&maxResults=1").body) # Get data from Google Books API
    publisher = googleBooksResponse['items'][0]['volumeInfo']['publisher'] 
    description = googleBooksResponse['items'][0]['volumeInfo']['description'] 
    categories = googleBooksResponse['items'][0]['volumeInfo']['categories'] 
    rating = googleBooksResponse['items'][0]['volumeInfo']['averageRating'] 
    image = googleBooksResponse['items'][0]['volumeInfo']['imageLinks']['smallThumbnail'] 

    if googleBooksResponse['items'][0]['saleInfo']['listPrice'] != nil
      price = googleBooksResponse['items'][0]['saleInfo']['listPrice']['amount']
    else
      price = nil
    end

    Book.create({
      title: title, author: author, year: year, 
      isbn: isbn, publisher: publisher, description: description, 
      categories: categories, price: price, rating: rating, 
      image: image
    });
  end
end

seedBookInfo()









