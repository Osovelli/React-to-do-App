const pool = require('../model/db');

// ********************
// ROUTES
// ********************

// GET ALL TODOS
exports.getAllTodos = async (req, res) => {
    try {
        const todos = await pool.query('SELECT * FROM todo');
        res.status(200).send(todos.rows);
    } catch (error) {
        res.status(404).send({error});
    }
}

// GET A TODO BY ID
exports.getTodo = async (req, res)=>{
    try {
        const { id } = req.params;
        const todo = await pool.query('SELECT * from todo WHERE todo_id = $1', [id]);
        res.status(200).send(todo.rows[0]);
    } catch (error) {
        res.status(404).send(error)
    }
}

// CREATE A TODO
exports.createTodo = async (req, res)=>{
    try {
        const { description } = req.body;
        const newTodo = await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [description]);
        res.status(201).send(newTodo.rows[0]);
    } catch (error) {
        res.status(400).send(error)
    }
}

// UPDATE A TODO ID
exports.updateTodo = async (req, res)=>{
    try {
        const { id } = req.params;
        const { description }= req.body;
        const todo = await pool.query('UPDATE todo SET description = $1 where todo_id = $2 RETURNING *', [description, id])

        res.status(200).send(todo.rows);
    } catch (error) {
        res.status(404).send({ error })
    }
}

// DELETE A TODO BY ID
exports.deleteTodo = async (req, res)=>{
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);
        res.status(204).json("deleted successfully");
    } catch (error) {
        res.status(404).send({ error })
    }
}