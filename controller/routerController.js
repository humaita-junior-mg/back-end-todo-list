
const models = require('../model/User')
const TodoModel = require('../model/Todo')

const auth = (request, response, next) => {   
    const { username } = request.headers;

    models.users.forEach(user=>{
        if(user.username === username){
            request.user = user  
        }
    })

    if(!request.user) return response.status(400).json({error: 'User not found'})

    next()
}

const newuser = (request, response) => {

    const { name, username } = request.body;

    let userExist = ''

    models.users.forEach(user=>{
        if(user.username === username){
            userExist += 'true'
        }else{
            userExist += 'false'
        } 
    })

    if(userExist === 'true') return response.status(400).json({error: 'User Already Exists!'}) 

    models.newuser(name, username)

    return response.status(201).send(models.getOne(username))

}

const showtodos = (request, response) => {

    const { user } = request    

    response.status(200).send(user.todos)

}

const newtodo = (request, response) => {

    const { title, deadline } = request.body
    const { user } = request

    const todoModel = TodoModel.todo(title, deadline)

    user.todos.push(todoModel)

    return response.status(200).send(todoModel)
}

const attTodo = (request, response) => {
    const { user } = request;

    const { title, deadline } = request.body;

    const { id } = request.params

    const todoid = user.todos.find((todo)=>
        todo.id === id
    )

    if(!todoid) return response.status(400).json({error: 'Todo not found'})

    todoid.title = title
    todoid.deadline = new Date(deadline)

    return response.status(200).json({newtodo: todoid})
   
}

const doneTodo = (request, response) => {
    const { user } = request;

    const { id } = request.params

    const todoid = user.todos.find((todo)=>
        todo.id === id
    )

    if(!todoid) return response.status(400).json({error: 'Todo not found'})

    todoid.done = true

    return response.status(200).json({newtodo: todoid})
}

const deleteTodo = (request, response) => {
    const { user } = request;

    const { id } = request.params

    const todoid = user.todos.find((todo)=>
        todo.id === id
    )

    user.todos.splice(todoid, 1)

    return response.status(200).json({todos: user.todos})
}

module.exports = {
    auth,
    newuser,
    showtodos,
    newtodo,
    attTodo,
    doneTodo, 
    deleteTodo
}