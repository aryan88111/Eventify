const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    passWord: {
        type: String,
        required: true
    },
    answer1:{
        type: String,
        // required: true
    
    },
    answer2:{
        type: String,
        // required: true
    },
    answer3:{
        type: String,
        // required: true
    }

})

const User = mongoose.model("User", userSchema); //creates

module.exports = User;