const models = require('../model/User')


const newuser = (request, response) => {

    const { name, username } = request.body;

    const userExist = models.users.some((user)=>
        user.username === username
    )

    if(userExist) return response.status(400).json({error: 'User Already Exists!'}) 

    models.newuser(name, username)

    return response.status(201).send(models.getOne(username))

}


module.exports = newuser