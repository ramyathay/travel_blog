var express = require('express')
var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mysql = require('mysql')

var cors = require('cors')
app.use(cors())

var moment = require('moment')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'Travel_Blog_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  else {
  	console.log('connected as id ' + connection.threadId);
  }
});

app.get('/places/:place',cors(),function(req,res){
  connection.query('SELECT * FROM Places WHERE place_name = ? LIMIT 1' , [req.params.place], function(err,result,fields){
  if(err) {
    console.log(err)
  }
  else {
    console.log("Selected place is",result)
    res.send({result: result})
  }
  })
})

app.post('/comments/:id',cors(),function(req,res) {
  
  var comment = {place_id: req.params.id,author: req.body.name,comment_text: req.body.comment,'posted_at': new Date()}
  connection.query('INSERT INTO Comments SET ?', comment,function(err,result,fields) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Inserted new comment",result.insertId)
      res.send({comment_id: result.insertId})
    }
  })
})

app.get('/comments/:id',cors(),function(req,res) {
  connection.query('SELECT * FROM Comments WHERE place_id = ?' , [req.params.id], function(err,result,fields){
  if(err) {
    console.log(err)
  }
  else {
    for (var i = 0; i < result.length; i++) {
      result[i].posted_at = moment(result[i].posted_at).format('MMMM Do YYYY')
    }
    console.log("All Comments are",result)
    res.send(result)
  }
  })
})


app.listen(5000,function(){
	console.log("Listening on port 5000")
});

