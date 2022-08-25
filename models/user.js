// WHY WE CALL MONGOS INSTED OF EXPRESS IN MODELS

const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    
    {
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    }, 

    email: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 20
    },
    password: {
         type: String,
         min: 6,
         required: true,   
    },

    profilePicture:{
        type: String,
        default: ""
    },

    coverPicture:{
        type: String,
        default: ""
    }, 
    
    followers: {
        type: Array,
        default: []
    }, 

    following: {
        type: Array,
        default: []
    }, 
    isAdmin: {
        type: Boolean,
        default: false
    }, 
    

},
    { timestamps: true }

); 


// WHY WE USE "USER " HERE 

module.exports = mongoose.model("user" , UserSchema)