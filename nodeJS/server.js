const express = require('express');
const cors = require('cors');
const personality = require('./routes/personality');

const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI1;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true }
);

app.use('/PersonalityTest', personality);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


//user
const User = require('./routes/GUser/user');
app.use("/user",User)