const router = require('express').Router();
const { handleSignup } = require('../controllers/index');

router.post('/signup', handleSignup);
module.exports = router;
