# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'httparty'

def createRandomPrice
  randomNum = Random.rand(25.00).round(2)
  randomNum < 4 ? createRandomPrice : randomNum;
end

def createRandomRating
  randomNum = Random.rand(6)
  randomNum < 1 ? createRandomRating : randomNum
end

def createRandomIsbn
  randomIsbn = '';
  while randomIsbn.length < 13
    randomIsbn += Random.rand(10).to_s
  end
  randomIsbn[0] = '9' if randomIsbn[0] === '0'
  return randomIsbn;
end

def createRandomYear
  years = ["1984", "2004", "2013", "2018", "1944", "2002", "1940", "2014"];
  years[Random.rand(8)]
end

def createRandomPublisher
  publishers = [
    "Scholastic, Inc.",
    "Random House Inc.",
    "HarperCollins Publishers",
    "La Santa Sede",
    "Pearson"
  ]
  publishers[Random.rand(4)]
end

def createBookDescription(title)
  case title
  when "Cheese is good"
    "Mister Graham is a well renowned author in his field on the topic of cheese specialty. 
    He believes in his assertion so greatly that he wrote a book called, “Cheese is good” outlining all of his reasons 
    for why he believes cheese is good. This book describes in details his various reasons for why he believes cheese is good. 
    The book become a massive hit and Mister Graham has since gained a 
    massive following of Cheese is good enthusiasts who hold various topics and discussions on proving why cheese 
    is good. However, there is a growing number of people in the cheese specialty field questioning why Mister 
    Graham doesn’t believe cheese is great.".gsub!(/(\S)[^\S\n]*\n[^\S\n]*(\S)/, '\1 \2')
  when "Falconer"
    "New York, 1993. Seventeen-year-old Lucy Adler, a street-smart, trash-talking baller, is often the only girl on the public 
    courts. At turns quixotic and cynical, insecure and self-possessed, Lucy is in unrequited love with her best friend and 
    pick-up teammate Percy, scion to a prominent New York family who insists he wishes to resist upper crust fate.".gsub!(/(\S)[^\S\n]*\n[^\S\n]*(\S)/, '\1 \2')
  when "Herzog"
    "This is the story of Moses Herzog, a great sufferer, joker, mourner, and charmer. Although his life steadily disintegrates 
    around him - he has failed as a writer and teacher, as a father, and has lost the affection of his wife to his best friend - 
    Herzog sees himself as a survivor, both of his private disasters and those of the age.".gsub!(/(\S)[^\S\n]*\n[^\S\n]*(\S)/, '\1 \2')
  when "Housekeeping"
    "A modern classic, Housekeeping is the story of Ruth and her younger sister, Lucille, who grow up haphazardly, first under 
    the care of their competent grandmother, then of two comically bumbling great-aunts, and finally of Sylvie, their eccentric 
    and remote aunt.".gsub!(/(\S)[^\S\n]*\n[^\S\n]*(\S)/, '\1 \2')
  when "Native Son"
    "Right from the start, Bigger Thomas had been headed for jail. It could have been for assault or petty larceny; by chance, 
    it was for murder and rape. Native Son tells the story of this young black man caught in a downward spiral after he kills a 
    young white woman in a brief moment of panic.".gsub!(/(\S)[^\S\n]*\n[^\S\n]*(\S)/, '\1 \2')
  when "Possession"
    "Possession is an exhilarating novel of wit and romance, at once an intellectual mystery and triumphant love story. It is the 
    tale of a pair of young scholars researching the lives of two Victorian poets.".gsub!(/(\S)[^\S\n]*\n[^\S\n]*(\S)/, '\1 \2')
  else
    "Sorry, no description available."
  end
end

def seedBookInfo()
  spApiResponse = JSON.parse(HTTParty.get('https://servicepros-test-api.herokuapp.com/api/v1/books').body) # Get data from Service Pros Book API
  spApiResponse.each do |book|
    title = book['title']
    author = book['author']
    year = book['year'] || createRandomYear()
    isbn = book['isbn'] || createRandomIsbn()

    googleBooksResponse = JSON.parse(HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=intitle:#{title}&maxResults=1").body) # Get data from Google Books API
    publisher = googleBooksResponse['items'][0]['volumeInfo']['publisher'] || createRandomPublisher()
    description = googleBooksResponse['items'][0]['volumeInfo']['description'] || createBookDescription(title)
    categories = googleBooksResponse['items'][0]['volumeInfo']['categories'] 
    rating = googleBooksResponse['items'][0]['volumeInfo']['averageRating'] || createRandomRating()
    image = googleBooksResponse['items'][0]['volumeInfo']['imageLinks']['smallThumbnail'] 

    if googleBooksResponse['items'][0]['saleInfo']['listPrice'] != nil
      price = googleBooksResponse['items'][0]['saleInfo']['listPrice']['amount']
    else
      price = createRandomPrice()
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










