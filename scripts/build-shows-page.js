
// Creating elements

// const concerts = [
//   {
//     date: 'Mon Sept 06 2021',
//     venue: 'Ronald Lane',
//     location: 'San Francisco, CA',    
//   },
//   {
//     date: 'Tue Sept 21 2021',
//     venue: 'Pier 3 East ',
//     location: 'San Francisco, CA',
    
//   },
//   {
//     date: 'Fri Oct 15 2021',
//     venue: 'View Lounge ',
//     location: 'San Francisco, CA',
    
//   },
//   {
//     date: 'Sat Nov 06 2021 ',
//     venue: 'Hyatt Agency',
//     location: 'San Francisco, CA',
    
//   },
//   {
//     date: 'Fri Nov 26 2021',
//     venue: 'Moscow Center  ',
//     location: 'San Francisco, CA',  
//   },
//   {
//     date: 'Wed Dec 15 2021 ',
//     venue: 'Press Club',
//     location: 'San Francisco, CA',   
//   }
// ];

const SHOWS_API_URL = 'https://project-1-api.herokuapp.com/showdates';
const SHOWS_API_KEY = '98fb0e40-0eeb-4919-ace4-b7361e82015a';

const showDates = axios.get(`${SHOWS_API_URL}?api_key=${SHOWS_API_KEY}`);

// main
const mainEl = document.querySelector('main');

// article
const article = document.createElement('article');
article.classList.add('shows');
mainEl.appendChild(article);
console.log(article);

// heading
const h3 = document.createElement('h3');
h3.classList.add('shows__title');
h3.innerText = 'Shows';
article.appendChild(h3);

// shows container
const container = document.createElement('div');
container.classList.add('shows__container');
article.appendChild(container);

const tabletDesktop = document.createElement('div');
tabletDesktop.classList.add('shows__tablet-desktop');
container.appendChild(tabletDesktop);

const tabletDesktopDate = document.createElement('p');
tabletDesktopDate.classList.add('shows__tablet');
tabletDesktopDate.innerText = 'date';
tabletDesktop.appendChild(tabletDesktopDate);

const tabletDesktopVenue = document.createElement('p');
tabletDesktopVenue.classList.add('shows__tablet');
tabletDesktopVenue.innerText = 'venue';
tabletDesktop.appendChild(tabletDesktopVenue);

const tabletDesktopLocation = document.createElement('p');
tabletDesktopLocation.classList.add('shows__tablet');
tabletDesktopLocation.innerText = 'location';
tabletDesktop.appendChild(tabletDesktopLocation);

const buttonTablet = document.createElement('a');
buttonTablet.classList.add('shows__tablet-button');
buttonTablet.classList.add('shows__tablet-button-hide');
buttonTablet.setAttribute('href', "#");
buttonTablet.innerText = "buy tickets"
tabletDesktop.appendChild(buttonTablet);


showDates
.then((response)=> {
  console.log(response)

  let concerts = response.data
  concerts.forEach((concert, index)=> {

    // show wrapper
    const showsWrapper = document.createElement('div');
    showsWrapper.classList.add('shows__wrapper');
    container.appendChild(showsWrapper);
  
    // date wrapper
    const dateWrapper = document.createElement('div');
    dateWrapper.classList.add('shows__date-wrapper')
    showsWrapper.appendChild(dateWrapper);
  
    // date label
    const dateLabel = document.createElement('p');
    dateLabel.classList.add('shows__label');
    // if(index !== 0){
    //   dateLabel.classList.add('shows__label--tablet-desktop');
    // }
    dateLabel.innerText = 'date';
    dateWrapper.appendChild(dateLabel);
  
    // date
    const date = document.createElement('p');
    date.classList.add('shows__date');
    let showingDate  =   Number(concert.date);
    console.log( typeof showingDate)
    date.innerHTML = new Date(showingDate).toDateString();
    console.log(concert.date)
    console.log( typeof concert.date)
    console.log(showingDate)
    // console.log(showingDate)
    // let currentDate = showingDate.toLocaleDateString();
    // date.innerHTML =  new Date(concert.date);
    dateWrapper.appendChild(date);
  
    //venue wrapper
    const venueWrapper = document.createElement('div');
    venueWrapper.classList.add('shows__venue-wrapper');
    showsWrapper.appendChild(venueWrapper);
  
    //venue label
    const venueLabel = document.createElement('p');
    venueLabel.classList.add('shows__label');
    // if(index !== 0){
    //   venueLabel.classList.add('shows__label--tablet-desktop');
    // }
    venueLabel.innerText = 'venue';
    venueWrapper.appendChild(venueLabel);
  
    //venue
    const venue = document.createElement('p');
    venue.classList.add('shows__venue');
    venue.innerHTML = concert.place;
    venueWrapper.appendChild(venue);
  
    //location wrapper
    const locationWrapper = document.createElement('div');
    locationWrapper.classList.add('shows__location-wrapper');
    showsWrapper.appendChild(locationWrapper);
  
    // location label
    const locationLabel = document.createElement('p');
    locationLabel.classList.add('shows__label');
    // if(index !== 0){
    //   locationLabel.classList.add('shows__label--tablet-desktop');
    // }
    locationLabel.innerText = 'location';
    locationWrapper.appendChild(locationLabel);
  
    // location
    const location = document.createElement('p');
    location.classList.add('shows__location');
    location.innerHTML = concert.location;
    locationWrapper.appendChild(location);
  
    // button wrapper
    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('shows__button-wrapper');
    // if(index === 0){
    // buttonWrapper.classList.add('shows__button-wrapper--top')
    // }
    showsWrapper.appendChild(buttonWrapper);
  
    // button
    const button = document.createElement('a');
    button.classList.add('shows__booking');
    button.setAttribute('href', "#");
    button.innerText = "buy tickets"
    buttonWrapper.appendChild(button);
  
    // hr
    const hr = document.createElement('hr');
    hr.classList.add('shows__divider')
    container.appendChild(hr);
  });
  
  

})




























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

