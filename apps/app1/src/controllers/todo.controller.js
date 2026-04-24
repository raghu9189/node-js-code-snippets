const todos = [{
        "id": 1,
        "content": "here is new todo"
    },
    {
        "id": 2,
        "content": "here is new todo NEW"
    },
    {
        "id": 3,
        "content": "here is new todo"
    },
    {
        "id": 4,
        "content": "here is new todo"
    }];

async function getAllTodos(req, res){
    res.status(200).send(todos);
}

async function createTodo(req, res){

    const { content } = req.body;
    const todoItem = {
        "id": todos.length+1,
        "content": content
    }
    todos.push(todoItem);
    // create new todo
    res.status(201).send(todoItem);
}

async function updateTodo(req, res) {
    const id = Number(req.params.id);
    console.log(id);
    const { content } = req.body;
    const todoItem = {
        "id": id,
        "content": content
    }
    todos[id-1]["id"] = id;
    todos[id-1]["content"] = content;

    // create new todo
    res.status(201).send({id, content});
}

async function deleteTodo(req, res) {
    const id = Number(req.params.id);
    // delete todo
    res.status(200).send(todos.splice(id-1,1));
}


export {
    getAllTodos, 
    createTodo, 
    updateTodo,
    deleteTodo
};