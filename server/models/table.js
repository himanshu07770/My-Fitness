const mongoose  = require('mongoose')
 const loginSchema = new mongoose.Schema({
    name : String,
    email : String,
    password: String
 })
 const LoginModel = mongoose.model("login",loginSchema)
 module.exports = LoginModel