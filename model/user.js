var mongoose = require('mongoose');
// var bcrypt = require('bcrypt-nodejs');
// var mongoosastic = require('mongoosastic')

// Define our user schema
const userSchema = new mongoose.Schema({
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true }
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    favoriteComics: [{
        type: Schema.Types.ObjectId,
        ref: 'Comic'
    }],
}, { toJSON: { getters: true }, id: false }, { toObject: { getters: true } }
);

userSchema.index({ 'name.first': 'text', 'name.last': 'text' });

userSchema.virtual('fullName').get(function () {
    return this.name.first + ' ' + this.name.last;
})

var User = mongoose.model('User', userSchema);

module.exports = User