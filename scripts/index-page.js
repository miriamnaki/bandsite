
const COMMENTS_API_URL = 'https://project-1-api.herokuapp.com/comments';
const COMMENTS_API_KEY = '6453c231-aaeb-4170-9b47-c3cef0a07fe5';
const allComments = axios.get(`${COMMENTS_API_URL}?api_key=${COMMENTS_API_KEY}`);

// creating the comments section and appending it to the main section
const mainEl = document.querySelector('main');
const sectionEl = document.createElement('section');
sectionEl.classList.add('comments');
mainEl.appendChild(sectionEl);

// fetching all comments and resolve the returned promise
allComments
.then((response) => {
 
  // clearing the comments section to start clean
  sectionEl.innerHTML = "";
  const comments = response.data;
 
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
            const rerenderedcomments = res.data

            // invoke displayCommentsBynewest function to display comments by newest
            displayCommentsBynewest(rerenderedcomments)

            // invoke the add comment function and pass the re-rendered comments array
            addComment(rerenderedcomments)                        
            })        
        })     
      }
    })
    .catch((error)=> {
      console.log(error)
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
    flexOne.classList.add('comments__flex-1');
    container.appendChild(flexOne); 
    
    // Avatar and Name Wrapper
    const commentOne = document.createElement('div');
    commentOne.classList.add('comments__one');
    flexOne.appendChild(commentOne);

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
    
    // date
    const date = document.createElement('p');
    date.classList.add('comments__date');
    let commentDate  = new Date(comment.timestamp);
    let currentDate = commentDate.toLocaleDateString();
    date.innerHTML = currentDate;
    flexOne.appendChild(date);

    // second Flex container
    const flexTwo = document.createElement('div');
    flexTwo.classList.add('comments__flex-2');
    container.appendChild(flexTwo);
    
    // description
    const description = document.createElement('p');
    description.classList.add('comments__description');
    description.innerHTML = comment.comment;
    flexTwo.appendChild(description);
 
    // created at in days
    const createdAt = document.createElement('p');
    createdAt.classList.add('comments__created-at');
    createdAt.innerText = `•  Posted ${timeInWords(comment.timestamp)}`;
    flexTwo.appendChild(createdAt)
    
    // days-delete-likes container
    const deleteLikes = document.createElement('div');
    deleteLikes.classList.add('comments__delete-likes');
    flexTwo.appendChild(deleteLikes);

    // delete 
    const deletePost = document.createElement('button');
    deletePost.classList.add('comments__post');
    deletePost.innerText = 'delete'
    deleteLikes.appendChild(deletePost)

    // handlind delete button
    deletePost.addEventListener('click', () => {
      
      axios.delete(`${COMMENTS_API_URL}/${comment.id}?api_key=${COMMENTS_API_KEY}`)
      .then((res)=> {
       
        sectionEl.innerHTML = "";
        axios.get(`${COMMENTS_API_URL}?api_key=${COMMENTS_API_KEY}`)
        .then((res) => {
          const rerenderedcomments = res.data
          displayCommentsBynewest(rerenderedcomments)
          addComment(rerenderedcomments)  
        })
      })
      .catch((error) => {
        console.log(error)
      })    
    })

    // post like button
    const likePost = document.createElement('button');
    likePost.classList.add('comments__post');
    likePost.innerText = `likes`
    deleteLikes.appendChild(likePost)

    // post likes
    const likes = document.createElement('p');
    likes.classList.add('comments__likes');
    likes.innerText = `${comment.likes}`
    deleteLikes.appendChild(likes)

    // handling like post button
    likePost.addEventListener('click', ()=> {
      axios.put(`${COMMENTS_API_URL}/${comment.id}/like?api_key=${COMMENTS_API_KEY}`,{
        likes: comment.likes
      }).then((res)=> {
          axios.get(`${COMMENTS_API_URL}?api_key=${COMMENTS_API_KEY}`)
          .then((res) => {
          sectionEl.innerHTML = "";
          const newcomments = res.data
          displayCommentsBynewest(newcomments)
          addComment(newcomments)  
        })
      })
      .then((error)=> {
        console.log(error)
      })
    })

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

//****************** function that posts time in words*************** */
//**** inspired from stackoverflow **** */
function timeInWords(date) {
  let seconds = Math.floor((Date.now() - date) / 1000);
  let unit = "second";
  let direction = "ago";
  if (seconds < 0) {
    seconds = -seconds;
    direction = "less than a minute ago";
  }
  let value = seconds;
  if (seconds >= 31536000) {
    value = Math.floor(seconds / 31536000);
    unit = "year";

  } 
  else if(seconds >= 2592000){
    value = Math.floor(seconds / 2562000);
    unit= 'month'
  }
  else if (seconds >= 86400) {
    value = Math.floor(seconds / 86400);
    unit = "day";
  } else if (seconds >= 3600) {
    value = Math.floor(seconds / 3600);
    unit = "hour";
  } else if (seconds >= 60) {
    value = Math.floor(seconds / 60);
    unit = "minute";
  }
  if (value != 1)
    unit = unit + "s";
  return value + " " + unit + " " + direction;
}



     
        
        
