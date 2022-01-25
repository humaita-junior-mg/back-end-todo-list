const router = require('express').Router()
const controller = require('../controller/todoController')
const auth = require('../controller/authController');



router.get('/todos', auth, controller.showtodos);

router.post('/todos', auth, controller.newtodo);

router.put('/todos/:id', auth, controller.attTodo);

router.patch('/todos/:id/done', auth, controller.doneTodo);

router.delete('/todos/:id', auth, controller.deleteTodo);

module.exports = router