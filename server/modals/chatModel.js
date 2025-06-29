const mongoose = require("mongoose");

const chatModel = mongoose.Schema({
    chatName : {type: String},
    isGroupChat : {type : Boolean},
    users : [
        {
            
        }
    ]
});