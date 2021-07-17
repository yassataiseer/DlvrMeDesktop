var express = require('express')
var app = express()
var path = require('path')

app.listen(8080, function () {
    console.log('Your application is listening on port 8080!')
})
app.use(express.static(path.join(__dirname,'scr/public')));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/src/pages/login.html");
})
app.get('/signup', function(req, res){
    res.sendFile(__dirname + "/src/pages/signup.html");
})
module.exports=app