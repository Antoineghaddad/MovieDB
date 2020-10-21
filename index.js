const express = require('express');
const port = 3000;
const app = express();
app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
  });


app.get('/test' ,function(req,res){
    res.send('{ status:200, message:ok }')
});

app.get('/time',function(req,res){
    var today = new Date();
    

    var hours,minutes;
    if(today.getMinutes() < 10){
    minutes = "0" + today.getMinutes();    
    }else{
        minutes = "" + today.getMinutes();
    }
    if(today.getHours() < 10){
        hours = "0" + today.getHours();
    }else{
        hours = "" + today.getHours();
    }
    var time = hours + ":" + minutes;
    
    res.send('{status:200, message:'+time+'}');
});
   

app.get('/' ,function(req,res){
    res.send('ok')
});



