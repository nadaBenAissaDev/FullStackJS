/*const mongoose= require('mongoose');
const QuizSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    TestType:{
        type:String,
        required:true,
        trim: true,
    },
    
    score:{
        type:Number,
        required:true,
        trim: true,     
    }, 
    
    questions: [
        { 
            question: {        
                type: String,
                required: true
            }, 
            answers:[
                {
                answer: {
                    type: Number,
                    required: true
                },
                isCorrect: {
                    type: Boolean,
                    default: true
                },
    }],
    }],

    duration :{
        hours : {
          type : Number,
          default: 0
        },
  
        minutes : {
          type : Number,
          default: 0
        },
  
        seconds : {
          type : Number,
          default: 0
        }
  
      }
});
module.exports = Quiz= mongoose.model('Quiz', QuizSchema);*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    type: {
        type: String,
        required: true
    },

    question: {
        type: String,
        required: true
    },
    
    optionA: {
        type: String,
        required: true
    },

    optionB: {
        type: String,
        required: true
    },

    optionC: {
        type: String,
        required: true
    },

    optionD: {
        type: String,
        required: true
    },

    answer: {
        type: String,
        required: true
    },

    dateCreated: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('quiz', QuizSchema);