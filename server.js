/**
 * Created by arnoldelite on 2017-01-22.
 */
var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());
app.use(require('./controllers/api/posts'));
app.use(require('./controllers/static'));
// app.use('/', require('./controllers/api/posts'));

app.listen(3000, function(){
    console.log('server is listening on', 3000);
});
module.exports = app;
