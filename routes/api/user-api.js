const router = require('express').Router();
const userscontroller = require('../../MyControllers/users-controller');
const auth = require('../../middleware/auth');

// @route   GET api/users
// @desc    Get all users
// @access  Private
router.get('/',auth,userscontroller.get)

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/',userscontroller.post)

// @route   PUT api/users
// @desc    Update user
// @access  Private
router.put('/:iduser',auth,userscontroller.put)

// @route   DELETE api/users
// @desc    Delete user
// @access  Private
router.delete('/:iduser',auth,userscontroller.delete)

module.exports = router;