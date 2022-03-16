const signBtn = document.querySelector('.signup');
const signBtn2 = document.querySelector('.signup2');
const loginBtn = document.querySelector('.login');
const formLogin = document.querySelector('.form-login');
const formSignup = document.querySelector('.form-signup');
const createNewPost = document.querySelector('.create-new-post-btn');
const createPostForm = document.querySelector('.form-create-post');
const emailInputSignUp = document.querySelector('.signup-email-input');
const nameInputSignUp = document.querySelector('.signup-name-input');
const passwordInputSignUp = document.querySelector('.signup-password-input');

const displayForm = (e) => {
  e.preventDefault();
  if (!document.querySelector('.screen')) {
    const screen = document.createElement('div');
    screen.classList = 'screen';
    document.body.appendChild(screen);
  }

  formSignup.style.visibility = 'visible';

  if (!document.querySelector('.fa-times')) {
    const exit = document.createElement('i');
    exit.classList = 'fa fa-times';
    document.body.appendChild(exit);
  }
  document.querySelector('.fa-times').onclick = function () {
    document.querySelector('.fa-times').remove();
    document.querySelector('.screen').remove();
    formSignup.style.visibility = 'hidden';
  };

  formLogin.style.visibility = 'hidden';
  createPostForm.style.visibility = 'hidden';
};
signBtn.addEventListener('click', displayForm);
signBtn2.addEventListener('click', displayForm);

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (!document.querySelector('.screen')) {
    const screen = document.createElement('div');
    screen.classList = 'screen';
    document.body.appendChild(screen);
  }

  formLogin.style.visibility = 'visible';

  if (!document.querySelector('.fa-times')) {
    const exit = document.createElement('i');
    exit.classList = 'fa fa-times';
    document.body.appendChild(exit);
  }
  document.querySelector('.fa-times').onclick = function () {
    document.querySelector('.fa-times').remove();
    document.querySelector('.screen').remove();
    formLogin.style.visibility = 'hidden';
  };
  formSignup.style.visibility = 'hidden';
  createPostForm.style.visibility = 'hidden';
});

createNewPost.onclick = function (e) {
  e.preventDefault();
  createPostForm.style.visibility = 'visible';

  const screen = document.createElement('div');
  screen.classList = 'screen';
  document.body.appendChild(screen);

  const exit = document.createElement('i');
  exit.classList = 'fa fa-times';
  screen.appendChild(exit);

  exit.onclick = function () {
    screen.remove();
    exit.remove();
    createPostForm.style.visibility = 'hidden';
  };
};
