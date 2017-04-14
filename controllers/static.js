/**
 * Created by arnoldelite on 2017-02-14.
 */
var router = require('express').Router();
var express = require('express');


router.get('/', function(req, res){
    res.sendfile('layouts/posts.html');
});
router.use(express.static(__dirname + '/../assets'));
module.exports = router; 