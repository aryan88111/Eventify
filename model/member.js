const mongoose = require("mongoose");


const memberSchema = mongoose.Schema({
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
    contact_No:{
     type:Number,
     required:true 

     },
    address:{
    type: String,
    required: true
    },
    image:{
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

const Member = mongoose.model("Member", memberSchema); //creates

module.exports = Member;