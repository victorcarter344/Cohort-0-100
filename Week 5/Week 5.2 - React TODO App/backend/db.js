const mongose = require("mongoose");

mongose.coonect(process.env.DB_URL)
const todoSchema = mogoose.Schema({
    title: String,
    description: String,
    Completed: Boolean
})

const todo = mongose.model('todos', todoSchema);

module.exports = {
    todo
}