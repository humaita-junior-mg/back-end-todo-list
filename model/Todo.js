const { v4: uuidv4 } = require('uuid')

function todo(title, deadline){
    const newtodo = { 
        id: uuidv4(),
        title: title,
        done: false,
        deadline: new Date(deadline),
        created_at: new Date()
    }

    return newtodo
}

module.exports = {
    todo
}