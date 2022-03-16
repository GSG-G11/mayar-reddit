const emailInputLogin = document.querySelector('.login-email-input');
const passwordInputLogin = document.querySelector('.login-password-input');
const msglogin = document.createElement('p');

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    email: emailInputLogin.value,
    password: passwordInputLogin.value,
  };
  request('api/v1/login', 'POST', data)
    .then((data) => {
        msglogin.innerHTML = '';
      if (data.msg=== 'done') {
        document.querySelector('.screen').remove();
        document.querySelector('.fa-times').remove();
        formLogin.style.visibility = 'hidden';
        return request('api/v1/username', 'GET');
      } else {
        msglogin.textContent = data.msg;
        msglogin.style.color = 'red', 
        formLogin.appendChild(msglogin);
      }
    })
    .then((data) => {
      if (data.username) {
        btns.style.display = 'none';
        logoutDiv.style.display = 'flex';
        username.innerHTML = data.username;
        window.location.reload(true)
      }
    });

});
