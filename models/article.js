const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');

const articleSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },   
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
   

});

// articleSchema.plugin(autoIncrement.plugin, 'article');

const Model = mongoose.model('article', articleSchema);
module.exports = Model;
