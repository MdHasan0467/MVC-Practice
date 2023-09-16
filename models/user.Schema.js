const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true, // without spaces
        minLenght: [3, "Name must be at least 3 characters."],
        maxLenght: [20, "Name is too long."],
    },
    email: {
        type: String,
        required: [true, "Please provide a email address."],
        trim: true, // without spaces
        unique: [true, "Please provide a unique email address."],
        validate: {
            validator: () => {
                Promise.resolve(false)
            },
            message: 'Email validation failed'
        }
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },

});

const UserModel = mongoose.model('Users', userSchema)

module.exports = UserModel;


