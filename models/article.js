const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,    
        ref: 'User'
    },
    published: {
        type: String,
        require: true
    },
    comment_id: {
        type: mongoose.Schema.Types.ObjectId,    
        ref: 'Coment'
    } 

});
const Model = mongoose.model('article', articleSchema);
module.exports = Model;