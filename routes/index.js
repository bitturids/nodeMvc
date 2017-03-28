var models = require("../models");

exports.index = function(req, res){
 res.render('index', {
        title : 'Express User'
    });

}

exports.list = function(req, res) {
    models.User.findAll().then(function(users){
        res.json(users);
    });
};
