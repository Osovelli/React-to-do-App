const getAllTodos = async () => {
    try{
        const response = await fetch('http://localhost:4001/todos');
        return await response.json()
    }catch(error){
        return error
    }
};

const getTodo = async (id) => {
    try {
        const response = await fetch(`http://localhost:4001/todos/${id}`);
        return await response.json();
    } catch (error) {
        return error
    }
};

const createTodo = async (description) => {
    try {
        if(description){
            const response = await fetch(`http://localhost:4001/todos`, {
            method: "POST",
            body: JSON.stringify({description}),
            headers: { "Content-type": "application/json" }
        });
        console.log(response)
        }
    } catch (error) {
        return error
    }
};

const updateTodo = async (id, description) => {
    try {
        const response = await fetch(`http://localhost:4001/todos/${id}`, {
            method: "PUT",
            body: JSON.stringify({description}),
            headers: { "Content-type": "application/json" }
        });
        return await response.json();
    } catch (error) {
        return error;
    }
};

const deleteTodo = async (id) => {
    try {
        const response = await fetch(`http://localhost:4001/todos/${id}`, {
            method: "DELETE"
        });
        console.log(response)
    } catch (error) {
        return error;
    }
};

export { getAllTodos, getTodo, updateTodo, deleteTodo, createTodo };