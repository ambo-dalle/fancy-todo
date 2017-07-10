const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

var db_config = {
     development : 'mongodb://localhost/fancytodos',
     test :  'mongodb://localhost/fancytodos-test'
}

var app_env = app.settings.env

mongoose.Promise = require('bluebird')

mongoose.connect(db_config[app_env], function(){
     console.log('connect to db fancytodos' + db_config[app_env]);
})

var users = require('./router/users');
var todos = require('./router/todos');



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use('/api/users', users)
app.use('/api/todos', todos)


app.listen(3000, function(){

})

module.exports = app;
