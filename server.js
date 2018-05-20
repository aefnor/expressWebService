const express = require('express');

const app = express();
var bodyParser = require('body-parser');
const axios = require('axios')
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded

console.log("Incoming Potential Message Request")
app.get('/new-message', function(req, res){
    res.send("Getting new message")
})
//This is the route the API will call
app.post('/new-message', function(req, res) {
    console.log("New Message")
    console.log(req.body)
    const {message} = req.body
  
    //Each message contains "text" and a "chat" object, which has an "id" which is the chat id
    console.log(message.text)
    if (!message || message.text != "Is it Burt or Brett?") {
      // In case a message is not present, or if our message does not have the word marco in it, do nothing and return an empty response
      //console.log('Sending End Request')
      return res.end()
    }
    console.log("Past if statement")
    // If we've gotten this far, it means that we have received a message containing the word "marco".
    // Respond by hitting the telegram bot API and responding to the approprite chat_id with the word "Polo!!"
    // Remember to use your own API toked instead of the one below  "https://api.telegram.org/bot<your_api_token>/sendMessage"
    axios.post('https://api.telegram.org/bot556287487:AAHYXq3XLVXAInd1EfyRkqacUvL5SuhrgH4/sendMessage', {
      chat_id: message.chat.id,
      text: "It's Burt Bowman, retard."
    })
    //https://example-create-react-app-express-bvtjydgdmq.now.sh
      .then(response => {
        // We get here if the message was successfully posted
        console.log('Message posted')
        res.end('ok')
      })
      .catch(err => {
        // ...and here if it was not
        console.log('Error :', err)
        res.end('Error :' + err)
      })
  
  });

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));