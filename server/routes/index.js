const router = require('express').Router();
const { handleSignup , handleLogin , handleLogout , postPosts} = require('../controllers/index');

router.post('/signup', handleSignup);
router.post('/login', handleLogin);
router.post('/logout', handleLogout);
router.post('/posts',postPosts);

module.exports = router;
