const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    data:{
        name:String,
        description:String,
        parent:String
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;