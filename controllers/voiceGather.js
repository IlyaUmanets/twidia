const VoiceResponse = require('twilio').twiml.VoiceResponse

function proceed(request, response) {
  const twiml = new VoiceResponse()

  twiml.say({ voice: 'alice' }, 'hey world');

  console.log(request.body.From)

  response.type('text/xml')
  response.send(twiml.toString())
}

exports.proceed = proceed
