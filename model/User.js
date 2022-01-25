const { v4: uuidv4 } = require('uuid')

module.exports = {

    users: [],

    newuser(name, username){
            this.users.push({
                id: uuidv4(),
                name: name,
                username: username,
                todos: [] 
            })
    },

    getAll(){
        return this.users
    },

    getOne(username){
        return this.users.find((user)=>
        user.username === username)
    },
}