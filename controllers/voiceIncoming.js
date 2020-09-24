const VoiceResponse = require('twilio').twiml.VoiceResponse

function proceed(request, response) {
  const twiml = new VoiceResponse()

  const gather = twiml.gather({
    action: 'gather',
    method: 'POST',
    input: 'speech'
  })

  gather.say('Hello, how can I help you?')

  response.type('text/xml')
  response.send(gather.toString())
}

exports.proceed = proceed
