const express = require('express');
const port = 3000;
const app = express();
var movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
  });

  app.get('/movies/create' ,function(req,res){
      var titre = req.query.title;
      var rate = req.query.rating;
      var date = req.query.year;
    if(typeof(titre)== "undefined" || titre == "" || date == "" || date.length !== 4 || isNaN(date) || isNaN(rate)){
      res.status(403).send('error:true, message:you cannot create a movie without providing a title and a year')
    }
else if(typeof(rate) === "undefined" || rate < 0 ){
    add = {title:titre, year:parseInt(date) ,rating:4 }
       
   }else{
       add = {title:titre, year :parseInt(date) ,rating:parseInt(rate) };
       movies.push(add);
       res.send(movies);
   }
       
    
    
});


app.get('/movies/read' ,function(req,res){
    res.status(200).send(movies);
});

app.get('/movies/read/by-date' ,function(req,res){
    movies.sort(function(a, b){return a.year - b.year});
    res.status(200).send(movies);
});

app.get('/movies/read/by-rating' ,function(req,res){
    movies.sort(function(a, b){return b.rating - a.rating});
    res.status(200).send(movies);
});

app.get('/movies/read/by-title' ,function(req,res){
    movies.sort(function(a, b){return a.title.localeCompare(b.title)});
    res.status(200).send(movies);
});

app.get('/movies/read/id/:id' ,function(req,res){
    
   if(req.params.id <= movies.length){
    res.status(200).send(movies[req.params.id]);
   }else{
    res.status(404).send('error:true, message:the movie ' + req.params.id + ' does not exist');
   }

});




app.get('/movies/update' ,function(req,res){
    
});
app.get('/movies/delete' ,function(req,res){

});



app.get('/search' ,function(req,res){
     if(req.query.s == ""){
         res.status(500).send('Error:true , Message:you have to provide a search');
         
     }else{
         res.status(200).send('Message:ok , data:' +req.query.s);
     }
});

app.get('/hello/:id' ,function(req,res){
      res.status(200).send('Message : hello' +" "+ req.params.id );
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



