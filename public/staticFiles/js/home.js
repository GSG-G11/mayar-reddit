const posts = document.querySelector('.posts');

request('api/v1/posts', 'GET')
.then((data) =>  data.posts)
.then((data)=> data.forEach((obj)=> createPost(obj , posts)));


const createPost = (obj, parent) => {
    const { votes, content, id ,created_at, name } = obj ;
    
    const post = document.createElement('div');
    post.className = 'post';
    post.id = id;

    const userPost = document.createElement('div');
    userPost.className = 'user-post';
    const usernameP = document.createElement('p');
    usernameP.textContent = name;
    const userIcon = document.createElement('i');
    userIcon.className = 'fa fa-user';
    userPost.append( userIcon,usernameP );

    const time = document.createElement('div');
    time.className = 'time';
    time.textContent = created_at.split('T')[1].split('.')[0];

    const contentPost = document.createElement('p');
    contentPost.textContent = content;

    const icons =  document.createElement('div');
    icons.className = 'icons';
    const likeIcon = document.createElement('i');
    likeIcon.className = 'fa fa-thumbs-up';
    const votesSpan = document.createElement('span');
    votesSpan.textContent = votes;
    icons.append(likeIcon,votesSpan);
    //if(username === name){
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa fa-trash';
        icons.appendChild(deleteIcon)
    //}

    post.append(userPost , time ,contentPost, icons);

    parent.append(post)

    
};
