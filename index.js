require('dotenv').config()

const express = require('express')

const voiceIncoming = require('./controllers/voiceIncoming.js')
const voiceGather = require('./controllers/voiceGather.js')
const sendTextRequest = require('./send_text_request.js')
const bodyParser = require('body-parser')


const app = express()

// function main() {
//   const sessionId = uuid.v4();

//   sendTextRequest.sendTextRequest('hello', sessionId)
// }

// main()

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/voice/incoming', voiceIncoming.proceed)
app.post('/voice/gather', voiceGather.proceed)


app.listen(3000, () => {
  console.log(
    'Now listening on port 3000. ' +
    'Be sure to restart when you make code changes!'
  );
})
