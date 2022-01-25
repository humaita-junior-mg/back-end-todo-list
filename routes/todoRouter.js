const router = require('express').Router()
const controller = require('../controller/routerController')
const cors = require('cors');

const whitelist = {
    origin: 'http://localhost:3000'
}

router.use(cors(whitelist));

router.post('/users', controller.newuser);

router.get('/todos', controller.auth, controller.showtodos);

router.post('/todos', controller.auth, controller.newtodo);

router.put('/todos/:id', controller.auth, controller.attTodo);

router.patch('/todos/:id/done', controller.auth, controller.doneTodo);

router.delete('/todos/:id', controller.auth, controller.deleteTodo);

module.exports = router