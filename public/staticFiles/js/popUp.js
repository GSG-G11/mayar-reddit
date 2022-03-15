const signBtn = document.querySelector('.signup');
const signBtn2 = document.querySelector('.signup2');
const loginBtn = document.querySelector('.login');
const formLogin = document.querySelector('.form-login');
const formSignup = document.querySelector('.form-signup');
const createNewPost = document.querySelector('.create-new-post-btn');
const createPostForm = document.querySelector('.form-create-post');

const displayForm= (e) => {
    e.preventDefault();
    if(!document.querySelector('.screen')){
        const screen = document.createElement('div');
        screen.classList = 'screen';
        document.body.appendChild(screen);
    }
    
    formSignup.style.display = 'flex';
    
    if(!document.querySelector('.fa-times')){
        const exit = document.createElement('i');
        exit.classList = 'fa fa-times';
        document.body.appendChild(exit);
      }
      document.querySelector('.fa-times').onclick = function () {
        document.querySelector('.fa-times').remove();
        document.querySelector('.screen').remove()
        formSignup.style.display = 'none';
    };

    formLogin.style.display = 'none';
    createPostForm.style.display='none'


};
signBtn.addEventListener('click', displayForm);
signBtn2.addEventListener('click', displayForm);


loginBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if(!document.querySelector('.screen')){
    const screen = document.createElement('div');
    screen.classList = 'screen';
    document.body.appendChild(screen);
    }

    formLogin.style.display = 'flex';
  
    if(!document.querySelector('.fa-times')){
      const exit = document.createElement('i');
      exit.classList = 'fa fa-times';
      document.body.appendChild(exit);
    }
    document.querySelector('.fa-times').onclick = function () {
      document.querySelector('.fa-times').remove();
      document.querySelector('.screen').remove()
      formLogin.style.display = 'none';
  };
  formSignup.style.display='none'
  createPostForm.style.display='none'
});

createNewPost.onclick = function (e){
    e.preventDefault()
    createPostForm.style.display = 'flex';

    const screen = document.createElement("div")
    screen.classList  = "screen"
    document.body.appendChild(screen)

    const exit = document.createElement("i")
    exit.classList  = "fa fa-times"
    screen.appendChild(exit)
    
    exit.onclick = function (){
        screen.remove();
        exit.remove();
        createPostForm.style.display = "none"
    }
}