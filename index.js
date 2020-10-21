const express = require('express');
const port = 3000;
const app = express();
app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
  });

app.get('/search' ,function(req,res){
     if(req.query.s == ""){
         res.status(500).send('Error:true , Message:you have to provide a search');
         
     }else{
         res.status(200).send('Message:ok , data:' +req.query.s);
     }
});

app.get('/hello/:id' ,function(req,res){
      res.status(200).send('Message : hello' +" "+ req.params.id )
});

app.get('/hello/' ,function(req,res){
    res.status(200).send('Message:hello')
});

app.get('/test' ,function(req,res){
    res.status(200).send('Message :ok ')
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
    
    res.status(200).send("Message: ok , Date:" +time);
});
   

app.get('/' ,function(req,res){
    res.send('ok')
});



