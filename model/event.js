//Name
//details
//City
//image
//person
//amount
const mongoose = require("mongoose");


const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true

    },

    image: {
        type: String,
        required: true
    },
    menu1:{
        type: String,
        required: true
    
    },
    menu2:{
        type: String,
        // required: true
    
    },
    menu3:{
        type: String,
        // required: true
    
    },
    city:{
     type:String,
     required:true 

     },
    person:{
     type: String,
     required: true

    },
 
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member'
    }

});


const Event = mongoose.model("Event", eventSchema); //creates

module.exports = Event;