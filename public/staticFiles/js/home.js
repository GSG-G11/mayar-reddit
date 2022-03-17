const posts = document.querySelector('.posts');
const navIcons = document.querySelector('.nav-icons');
let numVotes = 0 ;
request('api/v1/username', 'GET').then((data) => {
  btns.style.display = 'none';
  logoutDiv.style.display = 'flex';
  userName = data.username;
  username.innerHTML = data.username;
});
request('api/v1/posts', 'GET')
  .then((data) => data.posts)
  .then((data) => data.forEach((obj) => createPost(obj, posts)));

const createPost = (obj, parent) => {
  const { votes, content, id, created_at, name, img } = obj;

  const post = document.createElement('div');
  post.className = 'post';
  post.id = id;

  const userPost = document.createElement('div');
  userPost.className = 'user-post';
  const usernameP = document.createElement('p');
  usernameP.textContent = name;
  const userIcon = document.createElement('i');
  userIcon.className = 'fa fa-user';
  userPost.append(userIcon, usernameP);

  const time = document.createElement('div');
  time.className = 'time';
  time.textContent = created_at.split('T')[1].split('.')[0];

  const contentPost = document.createElement('p');
  contentPost.textContent = content;

  const postImg = document.createElement('img');
  postImg.src = img;

  const icons = document.createElement('div');
  icons.className = 'icons';
  const votesSpan = document.createElement('span');
  const likeIcon = document.createElement('i');
  likeIcon.className = 'fa fa-thumbs-up';
  likeIcon.addEventListener('click', (e) => {
    e.preventDefault();
    request('api/v1/votes', 'POST', { id: id })
    request('api/v1/votes', 'PUT', { id: id }).then((data) => {
      const object = {
        id: id,
        votes: data.numOfvotes,
      };
      return object
    })
    .then((object)=>{
        request('api/v1/posts', 'PUT', object)
    })
    .then(()=> window.location.reload(true))
     

  });
  votesSpan.innerText = votes;
  icons.append(likeIcon, votesSpan);
  request('api/v1/username', 'GET')
    .then((data) => {
      userName = data.username;
      btns.style.display = 'none';
      logoutDiv.style.display = 'flex';
      username.innerHTML = data.username;
      return data.username;
    })
    .then((username) => {
      if (username === name) {
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa fa-trash';
        deleteIcon.addEventListener('click', (e) => {
          e.preventDefault();
          const data = { id: id };
          request('/api/v1/posts', 'DELETE', data).then(() => {
            post.remove();
          });
        });
        icons.appendChild(deleteIcon);
      }
    });

  post.append(userPost, time, contentPost, postImg, icons);

  parent.append(post);
};

