import { model, models, Schema } from "mongoose";

const schema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },    
}, { timestamps: true });


export default models.user || model('user', schema);
