const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scrapSchema = new Schema({
  



      link: { type: String,  required: false  },
      name: { type: String, required: false }, 
      location: { type: String, required: false }, 
      profile_title: { type: String, required: false },
      connection: { type: String, required: false },
      job_title: { type: String, required: false },
      company_name: { type: String, required: false },
      joining_date: { type: String, required: false },
      exp: { type: String, required: false },
      college_name: { type: String, required: false },
      degree_name: { type: String, required: false },
      stream: { type: String, required: false },
      degree_year: { type: String, required: false },  },
  
  
);

const scrap = mongoose.model('scrap', scrapSchema);

module.exports = scrap;