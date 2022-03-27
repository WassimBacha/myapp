const router = require('express').Router();
const reservationController = require('../../MyControllers/reservation-controller');
const auth = require('../../middleware/auth');

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get('/',reservationController.get)

// @route   GET api/posts
// @desc    Get post by id
// @access  Public
router.get('/:idreservation',reservationController.getById)

// @route   GET api/posts
// @desc    Add post
// @access  Private
router.post('/',auth,reservationController.post)

// @route   GET api/posts
// @desc    Update post
// @access  Private
router.put('/:idreservation',auth,reservationController.put)

// @route   GET api/posts
// @desc    Delete post
// @access  Private
router.delete('/:idreservation',auth,reservationController.delete)

module.exports = router;