const router = require('express').Router();
const { handleSignup , handleLogin , handleLogout} = require('../controllers/index');

router.post('/signup', handleSignup);
router.post('/login', handleLogin);
router.post('/logout', handleLogout);

module.exports = router;
