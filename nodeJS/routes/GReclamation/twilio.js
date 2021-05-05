const twilio = require('twilio');
//const reclamation = require('../../models/reclamation');
//let reclamation = require('../../models/reclamation');


// Send SMS Messages directly using a Twilio Number
const sendSMS = (to, body) => {
    // Initialise account credentials
    const TWILIO_ACCOUNT_SID = "ACf9f1d802daf05290766269a8c0a2d41f";
    const TWILIO_AUTH_TOKEN = "5e8da9b0e4d732641395930277376e4f";
    const TWILIO_NUMBER = process.env.TWILIO_NUMBER
  
    // Create new twilio client
    const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

    return new Promise((success, fail) => {
      // Send the text message.
      client.messages.create(
        {
          to : '+21652272411',
          from:  '+12156078036', // Twilio Number
          body : 'votre reclamation est recu' // Message to Recipient
        },
        (error, message) => {
          if (error) {
            fail(error)
          } else {
            success({ to, body })
          }
        }
      )
    })
  }
  

  // tekhdmch
  const sendGroupSMS = (numbers, body) => {
    return new Promise((success, fail) => {
      const delivered = "+21652272411" ;// List of numbers in which message is delivered successfully
      const failed = [] // List of numbers in which message failed delivery
  
      Promise.all(
        // For every recipient phone number
        numbers.map(to => {
          return sendSMS(to, body) // Optional: Can be changed to sendSMSUsingCopilot if using Co-pilot
            .then(success => {
              delivered.push(to) // Message is delivered
            })
            .catch(error => {
              failed.push(to) // Message not sent
            })
        })
      ).then(results => {
        // Return the message sent, the numbers delivered to and the numbers which failed
        success({ body, delivered, failed })
      })
    })
  }





  //tekhdmch

  // Send SMS Messages using Co-pilot (Twilio Messaging Service)
const sendSMSUsingCopilot = (to, body) => {
    // Initialise account credentials
    const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
    const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
    const TWILIO_MESSAGING_SERVICE_SID = " MGd43cf3132b8600a1d7782f014f9cb3d4";// Using SID instead of Twilio number
  
    // Create new twilio client
    const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
  
    return new Promise((success, fail) => {
      // Send the text message.
      client.messages.create(
        {
          to :  '+21652272411', // Recipient's number
          messagingServiceSid: TWILIO_MESSAGING_SERVICE_SID, // Twilio Messaging SID
          body : 'waaa' // Message to Recipient
        },
        (error, message) => {
          if (error) {
            fail(error)
          } else {
            success({ to, body })
          }
        }
      )
    })
  }
  

  //whats

  const sendwhats = (to, body) => {
  
    
    const accountSid = "ACa1477a2558a2e62f86366e164e55efa0";
 const authToken = "5f49c7aa953371b1b295ba00665e70eb";
    const client = require('twilio')(accountSid, authToken);
  
    // Create new twilio client
   // const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
  
    return new Promise((success, fail) => {
      // Send the text message.
      client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'reclamation traité!',
         to: 'whatsapp:+21652272411'
       })
      .then(message => console.log(message.sid));
      (error, message) => {
        if (error) {
          fail(error)
        } else {
          success({ to, body })
        }
      }
       
      
    })
  }
  



   //call

   const call = (to, body) => {
  
    
    const accountSid = "ACf9f1d802daf05290766269a8c0a2d41f";
 const authToken = "5e8da9b0e4d732641395930277376e4f";
    const client = require('twilio')(accountSid, authToken);
  
    // Create new twilio client
   // const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
 
   //khanfousaa mouch mafhouma


/*   const http = require('http');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

http.createServer((req, res) => {
    // Create TwiML response
    const twiml = new VoiceResponse();

    twiml.say('Hello from your pals at Twilio! Have fun.');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  })
  .listen(1337, '127.0.0.1');

console.log('TwiML server running at http://127.0.0.1:1337/');*/

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+21652272411',
         from: '+1 215 607 8036'
       })
      .then(call => console.log(call.sid));        

  }
  






  module.exports = {
    sendSMS ,
    sendGroupSMS,
    sendSMSUsingCopilot,
    sendwhats,
    call

  }