
//inicialice los módulos, cree una aplicación Express e inicie el servidor.

const express = require('express');
const Twitter = require('twit');
const app = express();
 
app.listen(3000, () => console.log('Server running'));


//Llaves e acceso para twitter

const api_client = new Twitter({
    consumer_key: 'PvaI1QuWZr7fekYAbJsqVXZCc',
    consumer_secret: 'PvaI1QuWZr7fekYAbJsqVXZCc',
    access_token: 'PvaI1QuWZr7fekYAbJsqVXZCc',
    access_token_secret: 'aWPccXBBdKLiGkfkEhHuY9TVJRpMj3FroRXWH4l06BN0T'
  });


  app.post('/post_tweet', (req, res) => { 
    tweet = req.body;     
      client
        .post(`statuses/update`, tweet)
        .then(tweeting => {
          console.log(tweeting);
          res.send(tweeting);
        })
   
       .catch(error => {
        res.send(error);
      });       
      
  });