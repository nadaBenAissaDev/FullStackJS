const router = require('express').Router();

const User = require('../../models/User')
const bcrypt=require('bcryptjs');

const auth = require('../../middleware/auth');
const {check, validationResult} = require ('express-validator/check');
const secret="mysecrettoken";
const jwt = require('jsonwebtoken');


// // Test
// // @route POST /user/
router.post('/',(req,res)=>{
     res.send("test");
    //console.log(req.body);
});


// // Add new HR account
// // @route POST /user/add
router.post('/add', async (req, res) => {


    try {
        const { firstname,lastname,email,avatar,password,company} = req.body;
        
        //hash the password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);
        console.log(passwordHash);

        //vérification
        if (!firstname || !lastname || !email || !avatar || !password || !company) {
            return res
            .status(400)
            .json({ errorMessage : "Please enter all the fields."});
        }

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({
                errorMessage: "The email address: "+existingUser.email+" already exists."
            }); 
        }

    } catch (err) {
        console.error(err);
        res.status(500).send();
    }

    //hash the password
    const salt = await bcrypt.genSalt();
    new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        avatar : req.body.avatar,
        password : await bcrypt.hash(req.body.password,salt),
        company : req.body.company,
        role : 1, //HR
        activatedAccount : true     //activated
    }).save()
    .then(() => res.json('HR account added!'))
    .catch(err => res.status(400).json('Error: ' + err));


  });


// {
//     "email":"imen.elhakim@esprit.tn",
//     "password":"imen1234"
// }


module.exports = router;