const createPostBtn = document.querySelector('.create-post-btn');
const postTextArea = document.querySelector('textarea');
const linkImg = document.querySelector('.link-img-input')
let votes = 0 ;
createPostForm.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const post = {
        content : postTextArea.value,
        votes : votes,
        img : linkImg.value
    }
    request('/api/v1/posts','POST' , post)
    .then(()=>{
         window.location.reload(true)
    })
    
     .catch(()=>{
        const msg = document.createElement('p');
        msg.textContent = 'you must have an account ';
        msg.style.color = 'red';
        createPostForm.appendChild(msg);
     })
     


})