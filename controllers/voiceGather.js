const VoiceResponse = require('twilio').twiml.VoiceResponse
const dialogflow = require('../services/dialogflow.js')

async function proceed(request, response) {
  const twiml = new VoiceResponse()

  // twiml.say({ voice: 'alice' }, 'hey world');

  const dialogflowResponse = await dialogflow.sendTextRequest(
    request.body.SpeechResult,
    request.body.CallSid
  )

  console.log(dialogflowResponse)

  twiml.say({ voice: 'alice' }, dialogflowResponse)

  response.type('text/xml')
  response.send(twiml.toString())
}

exports.proceed = proceed
