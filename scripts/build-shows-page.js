//shows section

// Creating elements

const concerts = [
  {
    date: 'Mon Sept 06 2021',
    venue: 'Ronald Lane',
    location: 'San Francisco, CA',    
  },
  {
    date: 'Tue Sept 21 2021',
    venue: 'Pier 3 East ',
    location: 'San Francisco, CA',
    
  },
  {
    date: 'Fri Oct 15 2021',
    venue: 'View Lounge ',
    location: 'San Francisco, CA',
    
  },
  {
    date: 'Sat Nov 06 2021 ',
    venue: 'Hyatt Agency',
    location: 'San Francisco, CA',
    
  },
  {
    date: 'Fri Nov 26 2021',
    venue: 'Moscow Center  ',
    location: 'San Francisco, CA',  
  },
  {
    date: 'Wed Dec 15 2021 ',
    venue: 'Press Club',
    location: 'San Francisco, CA',   
  }
];

// main
const mainEl = document.querySelector('main');

// article
const article = document.createElement('article');
article.classList.add('shows');
mainEl.appendChild(article);
console.log(article);

// heading
const h1 = document.createElement('h1');
h1.classList.add('shows__title');
h1.innerText = 'Shows';
article.appendChild(h1);

// shows container
const container = document.createElement('div');
container.classList.add('shows__container');
article.appendChild(container);

concerts.forEach((concert, index)=> {

  // show wrapper
  const showsWrapper = document.createElement('div');
  showsWrapper.classList.add('shows__wrapper');
  container.appendChild(showsWrapper)

  // date wrapper
  const dateWrapper = document.createElement('div');
  dateWrapper.classList.add('shows__date-wrapper')
  showsWrapper.appendChild(dateWrapper);

  // date label
  const dateLabel = document.createElement('p');
  dateLabel.classList.add('shows__label');
  if(index !== 0){
    dateLabel.classList.add('shows__label--tablet-desktop')
  }
  dateLabel.innerText = 'date'
  dateWrapper.appendChild(dateLabel);

  // date
  const date = document.createElement('p');
  date.classList.add('shows__date');
  date.innerHTML = concert.date;
  dateWrapper.appendChild(date);

  //venue wrapper
  const venueWrapper = document.createElement('div');
  venueWrapper.classList.add('shows__venue-wrapper');
  showsWrapper.appendChild(venueWrapper);

  //venue label
  const venueLabel = document.createElement('p');
  venueLabel.classList.add('shows__label');
  if(index !== 0){
    venueLabel.classList.add('shows__label--tablet-desktop')
  }
  venueLabel.innerText = 'venue'
  venueWrapper.appendChild(venueLabel);

  //venue
  const venue = document.createElement('p');
  venue.classList.add('shows__venue');
  venue.innerHTML = concert.venue;
  venueWrapper.appendChild(venue);

  //location wrapper
  const locationWrapper = document.createElement('div');
  locationWrapper.classList.add('shows__location-wrapper');
  showsWrapper.appendChild(locationWrapper);

  // location label
  const locationLabel = document.createElement('p');
  locationLabel.classList.add('shows__label');
  if(index !== 0){
    locationLabel.classList.add('shows__label--tablet-desktop')
  }
  locationLabel.innerText = 'location';
  locationWrapper.appendChild(locationLabel);

  // location
  const location = document.createElement('p');
  location.classList.add('shows__location');
  location.innerHTML = concert.location
  locationWrapper.appendChild(location);

  // button wrapper
  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('shows__button-wrapper');
  if(index === 0){
  buttonWrapper.classList.add('shows__button-wrapper--top')
  }
  showsWrapper.appendChild(buttonWrapper);

  // button
  const button = document.createElement('a');
  button.classList.add('shows__booking');
  button.setAttribute('href', "#");
  button.innerText = "buy tickets"
  buttonWrapper.appendChild(button);

  // hr
  const hr = document.createElement('hr');
  container.appendChild(hr)


});

// const playbutton = document.querySelector('.mobilePrestitial__wrapper')
// console.log(playbutton)
// playbutton.classList.remove('sc-button-large')
// console.log(playbutton)
// let sectionEl = document.createElement('section');
// mainEl.appendChild(sectionEl);
// sectionEl.classList.add('shows');

// let h1El = document.createElement('h1');
// sectionEl.appendChild(h1El);
// h1El.classList.add('shows__title');
// h1El.innerText = "Shows";

// let shows = document.querySelector('.shows')



// const show = document.querySelector('.shows');
// show.innerHTML += concerts.map(concert => 
//   `<div>
//   <p>date</p>
//   <p>${concert.date}</p>
//   <p>venue</p>
//   <p>${concert.venue}</p>
//   <p>location</p>
//   <p>${concert.location}</p>
//   </div>`
// ).join(' ');

//  const shows = document.querySelector('.shows');
//  const allDivs = shows.querySelectorAll('div');
//  const btn = document.createElement('a');
//  shows.appendChild(btn)
//  allDivs.forEach((div)=> {
//   div.classList.add('shows__wrapper');
//  });
 
// const divs = document.querySelectorAll('.shows__wrapper');


// // console.log(divs)
// function addClass(n, newClass){
// for(let i = 0; i < divs.length; i++) {
//   let collection = divs[i].children
//   for(j =0; j< collection.length; j++){
//     let itemClass = collection[n]
//     itemClass.classList.add(newClass);
//   }
// }  
// }
// addClass(0, 'shows__label');
// addClass(1, 'shows__date');
// addClass(2, 'shows__label');
// addClass(3, 'shows__venue');
// addClass(4, 'shows__label');
// addClass(5, 'shows__location');
























// for(let i= 0; i < concerts.length; i++) {
//   // let concert = concerts[i];
//   let concert = document.createElement('div');
//   concert.classList.add('shows__wrapper')
//   shows.appendChild(concert)

//   // let data = document.createElement('p');
//   // date.classList('shows__date');
//   // date.
// }

// function createDiv(){}

// let showOne = document.createElement('div');
// sectionEl.appendChild(showOne);
// showOne.classList.add('shows__wrapper');

// let dateLabel = document.createElement('p');
// let date = document.createElement('p');
// let venueLabel = document.createElement('p');
// let venue = document.createElement('p');
// let locationLabel = document.createElement('p');
// let locationEl = document.createElement('p');

// showOne.appendChild(dateLabel);
// dateLabel.classList.add('shows__label')
// dateLabel.innerText = 'date'

// showOne.appendChild(date);
// date.classList.add('shows__label');
// date.innerText = 'Mon Sept 06 2021';

// showOne.appendChild(venueLabel);
// date.classList.add('shows__label');
// venueLabel.innerText = 'venue';

// showOne.appendChild(venue);
// venue.classList.add('shows__label');
// venue.innerText = 'Roland Lane';

// showOne.appendChild(locationLabel);
// locationLabel.classList.add('shows__label');
// locationLabel.innerText = 'location';

// showOne.appendChild(locationEl);
// locationEl.classList.add('location');
// locationEl.innerText = 'San Fransisco, CA'





// let showTwo = document.createElement('div');
// sectionEl.appendChild(showTwo);
// showTwo.classList.add('shows__wrapper');
// console.log(showTwo)



// let showThree = document.createElement('div');
// sectionEl.appendChild(showThree);
// showThree.classList.add('shows__wrapper');

// let showFour = document.createElement('div');
// sectionEl.appendChild(showFour);
// showFour.classList.add('shows__wrapper');

// let showFive = document.createElement('div');
// sectionEl.appendChild(showFive);
// showFive.classList.add('shows__wrapper');

// let showSix = document.createElement('div');
// sectionEl.appendChild(showSix);
// showSix.classList.add('shows__wrapper');

// let btn

