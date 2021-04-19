const express = require('express');
//const passport = require('passport');
const router = express.Router();

const PersonalityTest = require('../models/PersonalityTest');


const validateAddQuestion = require('../utils/validation/addQuestion');
   // '../utils/validation/addQuestion') 
// Add new PersonalityTest question
// @route POST /api/PersonalityTestr
// @desc add question
// @access Private
router.post('/', /*passport.authenticate('jwt-admin', { session: false }),*/ (req, res) => {
    const { errors, isValid } = validateAddQuestion(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const quiz = new PersonalityTest({
        type: req.body.type,
        question: req.body.question,
        optionA: req.body.optionA,
        optionB: req.body.optionB,
        optionC: req.body.optionC,
        optionD: req.body.optionD,
        answer: req.body.answer
        
    });

    quiz.save()
        .then(quiz => res.json(quiz))
        .catch(err => console.log(err));
});

// Gets free quiz questions
// @route GET /api/quiz/getFreeQuiz
// @desc get questions
// @access Private
router.get('/getFreeQuiz', (req, res) => {
    PersonalityTest.aggregate([{ $sample: { size: 15 } }])
        .exec((err, result) => {
            if (err) {
                return console.log(err);
            }
            res.json(result);
        });
});

// Gets all quiz questions
// @route GET /api/quiz/all
// @desc get questions
// @access Private
router.get('/all',/* (passport.authenticate('jwt-admin', { session: false })), */(req, res) => {
    PersonalityTest.find()
        .then(personalitytests => res.json(personalitytests))
        .catch(err => console.log(err));
});

// Gets quiz questions
// @route GET /api/quiz/category/:category
// @desc get questions by category
// @access Private
router.get('/category/:quizCategory',/* passport.authenticate('jwt-admin', { session: false }),*/ (req, res) => {
    PersonalityTest.find({ type: req.params.quizCategory })
        .then(personalitytests => res.json(personalitytests))
        .catch(err => console.log(err));
});

// Update Quiz
// @route PUT /api/quiz/updateQuestion/:id
// @desc update quiz question by Id
// @access Private
router.put('/updateQuestion/:id', /*passport.authenticate('jwt-admin', { session: false }),*/ (req, res) => {
    const { errors, isValid } = validateAddQuestion(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const quiz = new PersonalityTest({

        type: req.body.type,
        question: req.body.question,
        optionA: req.body.optionA,
        optionB: req.body.optionB,
        optionC: req.body.optionC,
        optionD: req.body.optionD,
        answer: req.body.answer
    });

    PersonalityTest.findOneAndDelete({ _id: req.params.id })
        .then((returnedQuiz) => {
            if (!returnedQuiz) {
                errors.noQuiz = 'No Question found';
                return res.status(404).json(errors);
            }
            quiz.save()
                .then(() => {
                    res.json({ message: 'Updated successfully!' });
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});

// removes all quiz questions
// @route DELETE /api/quiz/all
// @desc remove questions
// @access Private
router.delete('/all',/* passport.authenticate('jwt-admin', { session: false }), */(req, res) => {
    PersonalityTest.remove()
        .then(info => res.json({  message: 'Successfully removed' }))
        .catch(err => console.log(err));
});

// removes quiz question
// @route DELETE /api/quiz/category/:category
// @desc removes quiz questions by category
// @access Private
router.delete('/category/:quizCategory', /*passport.authenticate('jwt-admin', { session: false }), */(req, res) => {
    PersonalityTest.remove({ type: req.params.quizCategory })
        .then(() => res.json({ message: 'Successfully removed' }))
        .catch(err => console.log(err));
});

// removes quiz questions
// @route DELETE /api/quiz/:id
// @desc removes quiz question by id
// @access Private
router.delete('/:id',/* passport.authenticate('jwt-admin', { session: false }),*/ (req, res) => {
    PersonalityTest.findByIdAndDelete({ _id: req.params.id })
        .then(() => res.json({ message: 'Successfully removed' }))
        .catch(err => console.log(err));
});

module.exports = router;