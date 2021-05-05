const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reclamationSchema = new Schema({
  

  archived: { type: Boolean,  required: false  },
  lastname: { type: String, required: false }, 
  object: { type: String, required: false },
  description: { type: String, required: false },
  comment: { type: String, required: false },
  type: { type: String, required: false , enum: ['probleme', 'suggestion','autres'] },
  etat: { type: String, required: false , enum: ['treated', 'pending']} , },
  
);

const reclamation = mongoose.model('reclamation', reclamationSchema);

module.exports = reclamation;