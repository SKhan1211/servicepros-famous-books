<img 
  src="./app/assets/images/my_logo.png" 
  alt="SP Logo" 
  width="200" 
  target="_blank"
/>

## *[Live Link](https://serviceprosfamousbooks.herokuapp.com/ "Live Link")*

### Brief Overview

This project is my coding challenge submission to the Service Pro's software engineering team. It is a full-stack bookstore application that allows users to bookmark books and "buy" books. The following technologies are utilized to build this project:
* Ruby on Rails as a backend web framework for creating/managing API endpoints
* React.js to handle frontend views
* Redux for local state management
* PostgreSQL as the database

### Instructions to Run Application

After cloning the project on your machine, cd into the project directory and run the following commands:

1. `bundle install` - Install gems from the Gemfile
2. `rails db:create` - Create the databases in PostgreSQL
3. `rails db:migrate` - Run migrations
4. `rails db:seed` - Seed the database
5. `yarn install` - Install Yarn packages
6. `rails server` - Open a development server

You should then be up and running on localhost:3000

### Key Features

* Displaying books with images, ratings, and other information 
* Dynamic searching by title or author
* Sorting books alphabetically, by rating high to low, or price low to high
* A book show page displaying a description of the book and other information
* Books can be bookmarked and will dynamically update on the sidebar
* Books can be “purchased” - this just displays a little animation
* An explore link which takes the user to a random book show page
* Lazy loading for book images
* Custom design and styling, animations and transitions, and loading spinners to make the page more lively
* Saved data is persisted through refresh, however I went with sessionStorage so that when you close the tab it’ll remove all data to keep your browser clean
* Tested with Chrome, Firefox, and Safari
* Dockerized

### Future Features

* Allowing the user to display 10, 20, 50, or all books with use of pagination
* A categories section since I have this data available for each book
* A message on the page when there are no search results to display
* Responsive design -


