// comments array
// const comments = [
//   {
//     avatar: {
//       url: "Mohan-muruge.jpg",
//       alt: "mohan"
//     },
//     name: "Connor Walton",
//     date: "02/17/2021",
//     comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."

//   },
//   {
//     avatar: {
//       url: "Mohan-muruge.jpg",
//       alt: "mohan"
//     },
//     name: "Emilie Beach",
//     date: "01/09/2021",
//     comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
//   },
//   {
//     avatar: {
//       url: "Mohan-muruge.jpg",
//       alt: "mohan"
//     },
//     name: "Miles Acosta",
//     date: "12/20/2020",
//     comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."

//   }
// ];

// // main section
// const mainEl = document.querySelector('main');
// const sectionEl = document.createElement('section');
// sectionEl.classList.add('comments');
// mainEl.appendChild(sectionEl);

// display comments
// function displayComment(){
//   comments.forEach((comment) => {
//    const container = document.createElement('div');
//    container.classList.add('comments__container');
//    sectionEl.appendChild(container);
   
//    // Flex one container
//    const flexOne = document.createElement('div');
//    flexOne.classList.add('comments__flex-1');
//    container.appendChild(flexOne);
   
//    // comments Wrapper
//    const commentOne = document.createElement('div');
//    commentOne.classList.add('comments__one');
//    flexOne.appendChild(commentOne);
   
//    // avatar
//    const avatar = document.createElement('img');
//    avatar.classList.add('comments__avatar');
//    avatar.src = '/assets/images/' + comment.avatar.url;
//    avatar.alt =  comment.avatar.alt;
//    commentOne.appendChild(avatar);
   
//    // commenter name
//    const commentName = document.createElement('p');
//    commentName.classList.add('comments__name');
//    commentName.innerHTML = comment.name;
//    commentOne.appendChild(commentName);
   
//    // date
//    const date = document.createElement('p');
//    date.classList.add('comments__date');
//    date.innerHTML = comment.date;
//    flexOne.appendChild(date);
   
//    // Flex two wrapper
//    const flexTwo = document.createElement('div');
//    flexTwo.classList.add('comments__flex-2');
//    container.appendChild(flexTwo);
   
//    // description
//    const description = document.createElement('p');
//    description.classList.add('comments__description');
//    description.innerHTML = comment.comment;
//    flexTwo.appendChild(description);
   
//    // divider
//    const divider = document.createElement('hr');
//    divider.classList.add('comments__divider');
//    sectionEl.appendChild(divider);
//    });
// }

// displayComment()

// function addComment(name, comment){ 
  //   let obj = {} 
  //     const container = document.createElement('div');
  //     container.classList.add('comments__container');
  //     sectionEl.appendChild(container);
      
  //     const flexOne = document.createElement('div');
  //     flexOne.classList.add('comments__flex-1');
  //     container.appendChild(flexOne)
      
  //     const commentOne = document.createElement('div');
  //     commentOne.classList.add('comments__one');
  //     flexOne.appendChild(commentOne);
      
  //     const avatar = document.createElement('img');
  //     avatar.classList.add('comments__avatar');
  //     let url = '/assets/images/Mohan-muruge.jpg';
  //     let alt = 'Mohan'
  //     obj.avatar = {}
  //     avatar.src = obj.avatar.url = url;
  //     avatar.alt = obj.avatar.alt = alt;
      
  //     commentOne.appendChild(avatar);
      
  //     const commentName = document.createElement('p');
  //     commentName.classList.add('comments__name');
  //     commentName.innerHTML = name;
  //     commentOne.appendChild(commentName);
  //     obj.name = name
      
  //     const date = document.createElement('p');
  //     date.classList.add('comments__date');
  //     let today  = new Date();
  //     let currentDate = today.toLocaleDateString();
  //     date.innerHTML = currentDate;
  //     flexOne.appendChild(date);
  //     obj.date = currentDate;
      
  //     const flexTwo = document.createElement('div');
  //     flexTwo.classList.add('comments__flex-2');
  //     container.appendChild(flexTwo);
      
  //     const description = document.createElement('p');
  //     description.classList.add('comments__description');
  //     description.innerHTML = comment;
  //     flexTwo.appendChild(description);
  //     obj.comment = comment;
      
  //     const divider = document.createElement('hr');
  //     divider.classList.add('comments__divider');
  //     sectionEl.appendChild(divider);
  
  //   return obj
  // }

const COMMENTS_API_URL = 'https://project-1-api.herokuapp.com/comments';
const COMMENTS_API_KEY = '7a10ee6e-40ed-41cc-aaf1-03e72acb07a7';
const allComments = axios.get(`${COMMENTS_API_URL}?api_key=${COMMENTS_API_KEY}`);

// creating the comments section and appending it to the main section
const mainEl = document.querySelector('main');
const sectionEl = document.createElement('section');
sectionEl.classList.add('comments');
mainEl.appendChild(sectionEl);

// fetching all comments and resolve the returned promise
allComments
.then((response) => {
  console.log(response);
  console.log(response.data);


  // clearing the comments section to start clean
  sectionEl.innerHTML = "";
  const comments = response.data;
  console.log(response);
  console.log(response.data);

  // sorting  default comments by timestamp starting from the newest
  displayCommentsBynewest(comments);
  
  // invoke the addComment function and pass the comments array
  addComment(comments);
    
    
  // select the form by class name and add an event listener
  const form = document.querySelector('.comments-form__main');
  form.addEventListener('submit', handleSubmitForm);

  // handle the form when it is submitted
  function handleSubmitForm(e) {
    // stop form from reloading after its submitted
    e.preventDefault();

    // save the  submitted form input values
    let commenterName = e.target.commenterName.value;
    const description = e.target.description.value;

    // clear the input fields after submission
    e.target.reset();

        // post the submitted form input values to the api backend
      axios
        .post(`${COMMENTS_API_URL}?api_key=${COMMENTS_API_KEY}`, {
          name: commenterName,
          comment: description
        })

        // resolve the returned promise from post request
        .then((response) => {

          // rerender the comments section with new posted data
          // Make a get request from axios to get a promise
          const newData = axios.get(`${COMMENTS_API_URL}?api_key=${COMMENTS_API_KEY}`)
          newData
          //  resolve the returned promise
          .then((res) => {

            // Clear comments section to re-render new data to a clean section
            sectionEl.innerHTML = " ";
            console.log(res)
            const rerenderedcomments = res.data

            // invoke displayCommentsBynewest function to display comments by newest
            displayCommentsBynewest(rerenderedcomments)

            // invoke the add comment function and pass the re-rendered comments array
            addComment(rerenderedcomments)
                          
            })        
        })     
      }
    })


//********** function that adds a comment **************

function addComment(commentsArray){
  // loop through the comments array to create a container for each comment
  commentsArray.forEach((comment) => {
    const container = document.createElement('div');
    container.classList.add('comments__container');
    sectionEl.appendChild(container);
    
    // First flex container
    const flexOne = document.createElement('div'); 
    // const firstFlex = document.createElement('div'); 
    flexOne.classList.add('comments__flex-1');
    // firstFlex.classList.add('comments__flex-one');
    container.appendChild(flexOne);
    // container.appendChild(firstFlex);
    
    // Avatar and Name Wrapper
    const commentOne = document.createElement('div');
    // const avatarNameWrapper = document.createElement('div');
    commentOne.classList.add('comments__one');
    // avatarNameWrapper.classList.add('comments__avatar-name');
    flexOne.appendChild(commentOne);
    // firstFlex.appendChild(avatarNameWrapper)

    // avatar
    const avatar = document.createElement('div');
    avatar.classList.add('comments__avatar');
    commentOne.appendChild(avatar);
    // avatarNameWrapper
    
    // commenter name
    const commentName = document.createElement('p');
    commentName.classList.add('comments__name');
    commentName.innerHTML = comment.name;
    commentOne.appendChild(commentName);
    // avatarNameWrapper
    
    // date
    const date = document.createElement('p');
    date.classList.add('comments__date');
    let commentDate  = new Date(comment.timestamp);
    let currentDate = commentDate.toLocaleDateString();
    date.innerHTML = currentDate;
    flexOne.appendChild(date);
    // firstFlex

    
    // second Flex container
    // secondFlex
    const flexTwo = document.createElement('div');
    flexTwo.classList.add('comments__flex-2');
    // comments__flex-two
    container.appendChild(flexTwo);
    
    // description
    const description = document.createElement('p');
    description.classList.add('comments__description');
    description.innerHTML = comment.comment;
    flexTwo.appendChild(description);
    // secondFlex
    
    // divider
    const divider = document.createElement('hr');
    divider.classList.add('comments__divider');
    sectionEl.appendChild(divider);
    });
}

// ************ Function that sorts the array by date **********
function displayCommentsBynewest(commentsArray){
  commentsArray.sort(function(x, y){
    return y.timestamp - x.timestamp;
  })
}

      
     
        
        
