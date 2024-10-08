const mongoose = require('mongoose')
const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    address: {
        type: String, 
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    workday:{
        type: Date,
        required: true
    },
    created: { 
        type: Date,
        required: true, 
        default:Date.now}
});

module.exports = mongoose.model('staffs', staffSchema)