const router = require('express').Router();
const { handleSignup , handleLogin , handleLogout , postPosts , getPosts} = require('../controllers/index');
const { checkAuth } = require('../middleware/checkAuth');

router.post('/signup', handleSignup);
router.post('/login', handleLogin);
router.post('/logout', handleLogout);
router.get('/posts',getPosts);
router.use(checkAuth);
router.post('/posts',postPosts);


module.exports = router;
