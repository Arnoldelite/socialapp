/**
 * Created by arnoldelite on 2017-01-23.
 */
var db = require('../db');
//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
var Post = db.model('Post', {
    username: {type: String, required: true},
    body: {type: String, required: true},
    date: {type:Date, required: true,  default: Date.now }
});

// var postSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     body: {
//         type: String,
//         required: [true, 'Why no bacon?']
//     },
//     date: {
//         type: Date,
//         required: true,
//         default: Date.now
//     }
// });
// var Post = db.model('Post', postSchema);
module.exports = Post;
//module.exports = mongoose.model('Post', postSchema);