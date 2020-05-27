import React from "react";

import Loading from '../loading/loading';

const BOOK_TITLES = [
'1984', 'A Clockwork Orange', 'A Dance to the Music of Time', 'A Death in the Family',
'A Handful of Dust', 'A House for Mr. Biswas', 'A Passage to India', 'All the King\'s Men',
'American Pastoral', 'An American Tragedy', 'Animal Farm', 'Appointment in Samarra',
'Are You There God? It\'s Me, Margaret', 'At Swim-Two-Birds', 'Atonement', 'Beloved', 'Blood Meridian',
'Brideshead Revisited', 'Cheese is good', 'Call It Sleep', 'Catch-22', 'Death Comes for the Archbishop',
'Deliverance', 'Dog Soldiers', 'Falconer', 'Go Tell it on the Mountain', 'Gone With the Wind',
'Gravity\'s Rainbow', 'Herzog', 'Housekeeping', 'I, Claudius',
'Infinite Jest', 'Invisible Man', 'Light in August', 'Lolita',
'Lord of the Flies', 'Loving', 'Lucky Jim', 'Midnight\'s Children', 'Money',
'Mrs. Dalloway', 'Naked Lunch', 'Native Son', 'Neuromancer', 'Never Let Me Go',
'On the Road', 'One Flew Over the Cuckoo\'s Nest', 'Pale Fire', 'Play It As It Lays', 'Portnoy\'s Complaint',
'Possession', 'Rabbit, Run', 'Ragtime', 'Red Harvest', 'Revolutionary Road',
'Slaughterhouse Five', 'Snow Crash', 'The Spy Who Came in From the Cold', 'The Sound and the Fury', 'The Sportswriter',
'The Confessions of Nat Turner', 'The Adventures of Augie March', 'The Assistant', 'The Berlin Stories', 'The Big Sleep',
'The Blind Assassin', 'The Bridge of San Luis Rey', 'The Catcher in the Rye', 'The Corrections', 'The Crying of Lot 49',
'The Day of the Locust', 'The Death of the Heart', 'The French Lieutenant\'s Woman', 'The Golden Notebook', 
'The Grapes of Wrath', 'The Great Gatsby', 'The Heart is A Lonely Hunter', 'The Heart of the Matter', 
'The Lion, The Witch and the Wardrobe', 'The Lord of the Rings', 'The Sheltering Sky', 'The Sot-Weed Factor', 
'The Man Who Loved Children', 'The Moviegoer', 'The Painted Bird', 'The Power and the Glory', 'The Prime of Miss Jean Brodie',
'The Recognitions', 'The Sun Also Rises', 'Their Eyes Were Watching God', 'Things Fall Apart', 'To Kill a Mockingbird', 
'To the Lighthouse', 'Tropic of Cancer', 'Ubik', 'Under the Net', 'Under the Volcano', 
'Watchmen', 'White Noise', 'White Teeth', 'Wide Sargasso Sea',
]

class Explore extends React.Component {
  componentDidMount() {
    const randomTitleIdx = Math.floor(BOOK_TITLES.length * Math.random());
    this.props.history.push(`/book/${BOOK_TITLES[randomTitleIdx]}`)
  }

  render() { 
    return (
      <Loading />
    )
  }
};

export default Explore