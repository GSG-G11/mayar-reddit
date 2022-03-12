const { join } = require('path');

const homePage = (req, res) => res.sendFile(join(__dirname, '..', '..', 'public', 'index.html'));
const loginPage = (req, res) => res.sendFile(join(__dirname, '..', '..', 'public', 'html ', 'login.html'));
const signupPage = (req, res) => res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'signup.html'));
const profilePage = (req, res) => res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'personPage.html'));

module.exports = {
  homePage, loginPage, signupPage, profilePage,
};
