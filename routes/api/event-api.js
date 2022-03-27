const router = require('express').Router();
const eventController = require('../../MyControllers/event-controller');
const auth = require('../../middleware/auth');

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get('/',eventController.get)

// @route   GET api/posts
// @desc    Get post by id
// @access  Public
router.get('/:idevent',eventController.getById)

// @route   GET api/posts
// @desc    Add post
// @access  Private
router.post('/',auth,eventController.post)

// @route   GET api/posts
// @desc    Update post
// @access  Private
router.put('/:idevent',auth,eventController.put)

// @route   GET api/posts
// @desc    Delete post
// @access  Private
router.delete('/:idevent',auth,eventController.delete)

module.exports = router;