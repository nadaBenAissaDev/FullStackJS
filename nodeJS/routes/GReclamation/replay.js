//const express = require('express'); //needed to launch server
const cors = require('cors'); //needed to disable sendgrid security
const sgMail = require('@sendgrid/mail'); //sendgrid library to send emails 
const router = require('express').Router();

//const app = express(); //alias from the express function

//sendgrid api key
sgMail.setApiKey('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');

//app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

// Welcome page of the express server: 
router.get('/', (req, res) => {
    res.send("Welcome to the Sendgrid Emailing Server"); 
});

router.get('/send-email', (req,res) => {
    
    //Get Variables from query string in the search bar
    const { recipient, sender, topic, text } = req.query; 

    //Sendgrid Data Requirements
    const msg = {
       to: recipient, 
        from: sender,
        subject: topic,
        text: text,
    }

    //Send Email
   // sgMail.send(msg)
   sgMail.send(msg).then(() => {
    console.log('Message sent')
}).catch((error) => {
    console.log(error.response.body)
    // console.log(error.response.body.errors[0].message)
})
    .then((msg) => console.log(text));
});

// to access server run 'nodemon index.js' then click here: http://localhost:4000/
//app.listen(5000, () => console.log("Running on Port 4000")); 
module.exports = router;