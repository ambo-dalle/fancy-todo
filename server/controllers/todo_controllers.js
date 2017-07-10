var Todo = require('../models/todo_models');
var User = require('../models/user_models');
// var Job = require('../job/todo');
var mongoose = require('mongoose');

module.exports = {
  create: (req, res, next) => {
       var insert = new Todo ({
            title: req.body.title ,
            description: req.body.description ,
            status: req.body.status ,
            date: req.body.date ,
            created: new Date().toISOString()
       })
       insert.save((err, docs) =>{
            if (err) {
                 res.send(err.message)
            } else {
                 res.send(docs)
            }
       })
  },

  getall: (req, res, next) => {
    Todo.find()
      .exec(function(err, result) {
        if (result) {
          res.send(result);
        } else {
          res.send(`Error getall :\n ${err}`);
        }
      });
  },

  delete: (req, res, next) => {
    let id = req.params.id;
    let title = req.body.title;
    Todo.remove({
      _id: id
    }, function(err) {
      if (!err) {
        res.send(`Success remove with id ${id} + title ${title}`);
      } else {
        res.send(`Error remove :\n ${error}`);
      }
    });
  },

  update: (req, res, next) => {
    let id = req.params.id;
    Todo.findOne({
      _id: id
    }).exec(function(err, result) {
      if (result) {
        Todo.update({
          _id: id
        }, {
          $set: {
            title: req.body.title || result.title,
            description: req.body.description || result.description,
            status: req.body.status || result.status,
            date: req.body.date || result.date,
            updated: new Date().toISOString()
          }
        }, function(err, result) {
          if (result) {
            res.json(result);
          } else {
            res.send(`Error Update :\n ${err}`);
          }
        });
      } else {
        res.send(`Error getall :\n ${err}`);
      }
    });
  }
}
