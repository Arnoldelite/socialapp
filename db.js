/**
 * Created by arnoldelite on 2017-01-23.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/social',function(){
    console.log('mongodb connected');
});
module.exports = mongoose;