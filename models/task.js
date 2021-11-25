const mongoose = require("mongoose");
const schema = mongoose.Schema;

const taskSchema = schema({
    title:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    completed:{
        type: Boolean,
        require: true,
        default: false,
    },
    created_at:{
        type: Date,
        require: true,
        default: Date.now,
    }
});

module.exports = mongoose.model("Task", taskSchema);