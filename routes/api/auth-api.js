const router = require("express").Router();
const auth = require("../../middleware/auth");

const authController = require('../../MyControllers/Auth-Controller')

// @route   POST api/auth
// @desc    Login user
// @access  Public
router.post("/", authController.login);

// @route   GET api/auth/user
// @desc    Get current user
// @access  Public
router.get("/user", auth, authController.verifyToken);

module.exports = router;