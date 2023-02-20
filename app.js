const express=require('express');
const http=require('http');
const mongo=require('mongoose');
const bodyParser = require("body-parser");
const mongoconnection=require('./config/mongoconnection.json');




mongo.connect('mongodb://127.0.0.1:27017/4twin8', {
   // mongoose.connect('mongodb+srv://@gewinner.xsbnq.mongodb.net/gewinner-api?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to database successfully ');
    }).catch(() => {
        console.log('ERROR : unable to connect to database ');
    });

var app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const UserRouter=require('./routes/user');
app.use("/user", UserRouter);

const server=http.createServer(app);
server.listen(3000,()=>console.log("server is run"));