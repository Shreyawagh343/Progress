const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const user = new Schema({
        name:String,
        password:String,
        email:String
})
const todo = new Schema({
        title:String,
        done:Boolean,
        userId : ObjectId
})

const usermodel = mongoose.model("user",user)
const todomodel = mongoose.model("todo",todo)

module.exports = {
    usermodel,
    todomodel
}