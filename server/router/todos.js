var express = require('express');
var router = express.Router();
var todosControllers = require('../controllers/todo_controllers');
var jwtHelper = require('../helpers/verify')


router.get('/', jwtHelper.verifyToken, todosControllers.getall);
router.post('/', jwtHelper.verifyToken, todosControllers.create);
router.delete('/:id', jwtHelper.verifyToken, todosControllers.delete);
router.put('/:id', jwtHelper.verifyToken, todosControllers.update);

module.exports = router
