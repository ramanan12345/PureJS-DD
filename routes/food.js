var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://kirsty:kirsty@cloud2.plenary-group.com:27019/kirsty';

router.get('/', function(req, res) {
    MongoClient.connect(url,function(err,db){
        db.collection('food1').find().toArray(function(err,data){
            res.json(data);
        });
    });

});

module.exports = router;





