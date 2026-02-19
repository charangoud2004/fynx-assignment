const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    dateofbirth: {
        type: Date,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Publisher", "Reviewer", "user"],
        default: "Reviewer",
    },
    status: {
        type: String,
        required: true,
        enum: ["Active", "Suspended", "Inactive"],
        default: "Active",
    },
}, { timestamps: true }); 

module.exports = mongoose.model("User", userSchema);