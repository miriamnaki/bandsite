// comments array
const comments = [
  {
    avatar: {
      url: "Mohan-muruge.jpg",
      alt: "mohan"
    },
    name: "Connor Walton",
    date: "02/17/2021",
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."

  },
  {
    avatar: {
      url: "Mohan-muruge.jpg",
      alt: "mohan"
    },
    name: "Emilie Beach",
    date: "01/09/2021",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
  },
  {
    avatar: {
      url: "Mohan-muruge.jpg",
      alt: "mohan"
    },
    name: "Miles Acosta",
    date: "12/20/2020",
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."

  }
];

// main section
const mainEl = document.querySelector('main');
const sectionEl = document.createElement('section');
sectionEl.classList.add('comments');
mainEl.appendChild(sectionEl);

// function to display comments
function displayComment(){
   comments.forEach((comment) => {
    const container = document.createElement('div');
    container.classList.add('comments__container');
    sectionEl.appendChild(container);
    
    // Flex one container
    const flexOne = document.createElement('div');
    flexOne.classList.add('comments__flex-1');
    container.appendChild(flexOne);
    
    // comments Wrapper
    const commentOne = document.createElement('div');
    commentOne.classList.add('comments__one');
    flexOne.appendChild(commentOne);
    
    // avatar
    const avatar = document.createElement('img');
    avatar.classList.add('comments__avatar');
    avatar.src = '/assets/images/' + comment.avatar.url;
    avatar.alt =  comment.avatar.alt;
    commentOne.appendChild(avatar);
    
    // commenter name
    const commentName = document.createElement('p');
    commentName.classList.add('comments__name');
    commentName.innerHTML = comment.name;
    commentOne.appendChild(commentName);
    
    // date
    const date = document.createElement('p');
    date.classList.add('comments__date');
    date.innerHTML = comment.date;
    flexOne.appendChild(date);
    
    // Flex two wrapper
    const flexTwo = document.createElement('div');
    flexTwo.classList.add('comments__flex-2');
    container.appendChild(flexTwo);
    
    // description
    const description = document.createElement('p');
    description.classList.add('comments__description');
    description.innerHTML = comment.comment;
    flexTwo.appendChild(description);
    
    // divider
    const divider = document.createElement('hr');
    divider.classList.add('comments__divider');
    sectionEl.appendChild(divider);
    });
}

displayComment()

// function to add a comment
function addComment(name, comment){ 
  let obj = {} 
    const container = document.createElement('div');
    container.classList.add('comments__container');
    sectionEl.appendChild(container);
    
    const flexOne = document.createElement('div');
    flexOne.classList.add('comments__flex-1');
    container.appendChild(flexOne)
    
    const commentOne = document.createElement('div');
    commentOne.classList.add('comments__one');
    flexOne.appendChild(commentOne);
    
    const avatar = document.createElement('img');
    avatar.classList.add('comments__avatar');
    let url = '/assets/images/Mohan-muruge.jpg';
    let alt = 'Mohan'
    obj.avatar = {}
    avatar.src = obj.avatar.url = url;
    avatar.alt = obj.avatar.alt = alt;
    
    commentOne.appendChild(avatar);
    
    const commentName = document.createElement('p');
    commentName.classList.add('comments__name');
    commentName.innerHTML = name;
    commentOne.appendChild(commentName);
    obj.name = name
    
    const date = document.createElement('p');
    date.classList.add('comments__date');
    let today  = new Date();
    let currentDate = today.toLocaleDateString();
    date.innerHTML = currentDate;
    flexOne.appendChild(date);
    obj.date = currentDate;
    
    const flexTwo = document.createElement('div');
    flexTwo.classList.add('comments__flex-2');
    container.appendChild(flexTwo);
    
    const description = document.createElement('p');
    description.classList.add('comments__description');
    description.innerHTML = comment;
    flexTwo.appendChild(description);
    obj.comment = comment;
    
    const divider = document.createElement('hr');
    divider.classList.add('comments__divider');
    sectionEl.appendChild(divider);

  return obj
}

// adding event ot the form
const form = document.querySelector('.comments-form__main');
form.addEventListener('submit', handleSubmitForm);

// handling submit
function handleSubmitForm(e) {
  e.preventDefault();
  const commentName = e.target.commenterName.value;
  const description = e.target.description.value;
  e.target.reset()
  let newComment = addComment(commentName, description);
  comments.unshift(newComment) 
 }
  





