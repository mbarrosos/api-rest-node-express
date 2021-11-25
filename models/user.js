const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = schema({
    name: {
        type: String,
        require: false,
    },
    lastname: {
        type: String,
        require: false,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    avatar: {
        type: String,
        require: false,
    }

});

module.exports = mongoose.model("User", UserSchema);