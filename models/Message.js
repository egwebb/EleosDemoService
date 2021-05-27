const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema (
{
    direction: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    message_type: {
        type: String,
        required: true
    },
    composed_at: {
        type: String,
        required: true
    },
    platform_received_at:{
        type: String,
        required: true
    }
},
{
    toJSON: {
        transform(doc, ret) {
        //ret.id = ret._id;
        delete ret._id;
        },
        versionKey: false,
    },
})