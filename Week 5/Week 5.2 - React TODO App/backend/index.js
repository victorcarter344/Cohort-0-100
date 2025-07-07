const express = require('express');
const { crreateTodo, updateTodo} = require("./types");
const app = express();
const { todo } = require("./db");
const cors = require("cors");
require('dotenv').config();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));

app.post("todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createPayloadTodo.safeParse(createPayload);
    if( !parsedPayload.success){
        res.status(411).json({
            msg: "You send the wrong inputs",
        })
        return;
    }
    
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("todos", async function (req,res) {
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put("/completed", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createPayloadTodo.safeParse(createPayload);
    if( !parsedPayload.success){
        res.status(411).json({
            msg: "You send the wrong inputs",
        })
        return;
    }

    await todo.update({
        _id: req.body.id 
    }, {
        completed: true           
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);