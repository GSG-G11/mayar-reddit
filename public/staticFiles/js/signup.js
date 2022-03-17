const logoutDiv = document.querySelector('.logout');
const logoutBtn = document.querySelector('.logout-btn');
const btns = document.querySelector('.btns');

const msg = document.createElement('p');
formSignup.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    email: emailInputSignUp.value,
    name: nameInputSignUp.value,
    password: passwordInputSignUp.value,
  };
  request('api/v1/signup', 'POST', data)
    .then((data) => {
      msg.innerHTML = '';
      if (data.msg === 'done') {
        document.querySelector('.screen').remove();
        document.querySelector('.fa-times').remove();
        formSignup.style.visibility = 'hidden';
        return request('api/v1/username', 'GET');
      } else {
        msg.textContent = data.msg;
        (msg.style.color = 'red'), formSignup.appendChild(msg);
      }
    })
    .then((data) => {
      if (data.username) {
        btns.style.display = 'none';
        logoutDiv.style.display = 'flex';
        username.innerHTML = data.username;
       // window.location.reload(true)

      }
    });


});
