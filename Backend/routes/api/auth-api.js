const router = require("express").Router();
const auth = require("../../middleware/auth");

const authController = require('../../MyControllers/Auth-Controller')
const cors = require('cors');

// @route   POST api/auth
// @desc    Login user
// @access  Public
router.get("/", authController.login);

// @route   GET api/auth/user
// @desc    Get current user
// @access  Public
router.get("/user", auth, authController.verifyToken);

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });
module.exports = router;