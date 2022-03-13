const router = require('express').Router();
const { handleSignup , handleLogin} = require('../controllers/index');

router.post('/signup', handleSignup);
router.post('/login', handleLogin);
module.exports = router;
