const router = require("express").Router();

const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const secret = "mysecrettoken";

// // Test
// // @route POST /user/
router.post("/", (req, res) => {
  res.send("test");
  //console.log(req.body);
});

// // Add new HR account
// // @route POST /user/add
router.post("/add", async (req, res) => {
  try {
    const { firstname, lastname, email, avatar, password, company } = req.body;

    //hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    console.log(passwordHash);

    //vérification
    if (!firstname || !lastname || !email || !avatar || !password || !company) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter all the fields." });
    }

    //Check existing accounts
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        errorMessage:
          "The email address: " + existingUser.email + " already exists.",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }

  //Hash the password
  const salt = await bcrypt.genSalt();
  new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    avatar: req.body.avatar,
    password: await bcrypt.hash(req.body.password, salt),
    company: req.body.company,
    role: 1, //HR
    activatedAccount: true, //activated
  })
    .save()
    .then(() => res.json("HR account added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});


// ---------------------------------   DEACTIVATE ACCOUNT   ---------------------------------
router.route('/:id').post((req,res)=>{
    User.findById(req.params.id)
    .then(user=>{
        user.activatedAccount = false;

        user.save()
        .then(()=>res.json('Account deactivated successfully.'))
        .catch(err=>res.status(400).json('Error: '+err));
    })
    .catch(err=>res.status(400).json('Error: '+err));
});


// ---------------------------------   LOGIN: using json web token JWT   ---------------------------------

//@route GET api/auth
//@desc Tout route
//@access Public
//rend detail user connecté
async function find(req,res){
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
router.get('/',auth,find);

//@route GET api/auth
//@desc Authenticate User & get user
//@access Public
router.post('/auth', [
    check ('email','Please include a valid Email').isEmail(),
    check ('password','Password is required').exists()
],

async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {email,password} = req.body;
    try{

    // See if user exists by Email or by password
        let user= await User.findOne({email});
        const isMatch= await bcrypt.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({errors: [{msg: 'Invalid Credentials'}]});
        } 
  
    //return jsonwebtoken
    const playload= {
        user: {
            id: user.id
        }
    }
    jwt.sign(
        playload, 
        secret,
        { expiresIn: 360000},
        (err, token)=> {
            if (err) throw err;
            res.json({token});
        });
    
    }catch(err){
        console.log(err.message);
        res.status(500).send('Server error!');
    }
});

// ---------------------------------   LOGOUT   ---------------------------------
router.get('/logout',(req,res)=>{
    token="";
    res.json({token});
})




module.exports = router;
