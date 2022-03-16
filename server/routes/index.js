const router = require('express').Router();
const {
    handleSignup,
    handleLogin,
    handleLogout,
    postPosts,
    getPosts,
    deletePosts,
    updatePosts,
    getUserName,
    postVotes,
    getVotes,
} = require('../controllers/index');
const { checkAuth } = require('../middleware/checkAuth');

router.post('/signup', handleSignup);
router.post('/login', handleLogin);
router.post('/logout', handleLogout);
router.get('/posts', getPosts);
router.put('/votes', getVotes);
router.use(checkAuth);
router.get('/username', getUserName);
router.post('/posts', postPosts);
router.delete('/posts', deletePosts);
router.put('/posts', updatePosts);
router.post('/votes', postVotes);

module.exports = router;
