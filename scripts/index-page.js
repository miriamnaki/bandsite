const comments = [
  {
    avatar: "avatar",
    name: "Connor Walton",
    date: "02/17/2021",
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."

  },
  {
    avatar: "avatar",
    name: "Connor Walton",
    date: "01/09/2021",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
  },
  {
    avatar: "avatar",
    name: "Miles Acosta",
    date: "12/20/2020",
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."

  }
];

// const sectionEl = document.querySelector('.comments-section');
// const defaultComments = document.createElement('div');
// defaultComments.classList.add('comments__default');
// sectionEl.appendChild(defaultComments);

// for(let i = 0; i < comments.length; i++) {
//   let p = document.createElement('p');
//   let aComment = comments[i].name;
//   p.innerText = aComment
//   console.log(aComment)
//   defaultComments.append(p);
// }
// comments.forEach(el => defaultComments.append(el)) 
// console.log(el)



const form = document.querySelector(".comments");

form.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(e) {
  e.preventDefault();
}