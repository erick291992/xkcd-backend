var mongoose = require('mongoose');

const comicSchema = new mongoose.Schema({
    month: { type: String },
    num: { type: Number },
    link: { type: String },
    year: { type: String },
    news: { type: String },
    safe_title: { type: String },
    transcript: { type: String },
    alt: { type: String },
    img: { type: String },
    title: { type: String },
    day: { type: String },
    imgRetina: { type: String }
}, { toJSON: { getters: true }, id: false }, { toObject: { getters: true } }
);

var Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic