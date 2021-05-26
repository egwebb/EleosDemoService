const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
{
    username: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    menu_code: {
        type: String
    },
    dashboard_code: {
        type: String
    },
    custom_settings_form_code: {
        type: String
    },
    api_token: {
        type: String
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
});

module.exports = User = mongoose.model('user', UserSchema);