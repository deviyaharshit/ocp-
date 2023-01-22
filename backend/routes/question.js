const express = require('express');
const Question = require('../models/Question');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Route 1 : Create a Question using : POST "/api/question/addquestion".  No login required

router.post('/addquestion', [
    body('title', 'Enter a valid Title').isLength({ min: 3 }),
    body('description', 'Enter a valid Description').isLength({ min: 5 })
], async (req, res) => {

    try {
        // If there are errors , return bad request and the errors
        let success = false;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }

        let question = await Question.create({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category
        })
        success = true;
        res.json({ success, question });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 2 : Fetch All Questions using : POST "/api/question/fetchallquestion".  No login required

router.get('/fetchallquestion', async (req, res) => {
    const question = await Question.find();
    res.json(question);
})

// Route 3 : Delete an existing Question using : DELETE "api/question/deletequestion". No Login Required

router.delete('/deletequestion/:id', async (req, res) => {

    try {
        // let success = false;

        // Find the note to be deleted and delete it
        let question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).send("Not Found");
        }

        question = await Question.findByIdAndDelete(req.params.id);
        // success = true;
        res.json({ Success: "Question has been Deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;