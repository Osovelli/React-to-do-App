const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getAllTodos, getTodo, createTodo, updateTodo, deleteTodo } = require('./controllers');

// ********************
// MIDDLEWARE
// ********************

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ********************
// ROUTES
// ********************

// GET ALL TODOS
app.get('/todos', getAllTodos);

// GET A TODO BY ID
app.get('/todos/:id', getTodo);

// CREATE A TODO
app.post('/todos', createTodo)

// UPDATE A TODO ID
app.put('/todos/:id', updateTodo)

// DELETE A TODO BY ID
app.delete('/todos/:id', deleteTodo)

app.listen(process.env.PORT, ()=>{
    console.log('listening on port: ', process.env.PORT)
}); 