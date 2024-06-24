import mongoose from "mongoose";
import validator from "validator";
const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"Name Required"],
        minLength: [3,"Name Must contain atleast 3 characters"],
    },
    email:{
        type:String,
        required: [true,"Email Required"],
        validate: [validator.isEmail,"Please Provide valid email!"],
    },
    subject:{
        type:String,
        required: [true,"Subject Required"],
        minLength: [5,"Subject Must contain atleast 5 characters"],
    },
    message:{
        type:String,
        required: [true,"Message Required"],
        minLength: [10,"Message Must contain atleast 10 characters"],
    },
});

export const Message = mongoose.model("Message",messageSchema);