const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Code = require('../models/Code');
const { body, validationResult } = require('express-validator');

// Route 1 : Get all Codes of user using : GET "/api/code/fetchusercodes". Login required

router.get('/fetchusercodes', fetchuser, async (req, res) => {
    const codes = await Code.find({ userid: req.user.id });
    res.json(codes);
})

// Route 1.1 : Get all Codes of particular question using : GET "/api/code/fetchallcodes". No Login required

router.get('/fetchallcodes/:question', async (req, res) => {
    const codes = await Code.find({ question: req.params.question });
    res.json(codes);
})

// Route 1.2 : Get all Codes using : GET "/api/code/allcodes". No Login required

router.get('/allcodes', async (req, res) => {
    const codes = await Code.find();
    res.json(codes);
})

// Route 2 : Add a new Code using : POST "/api/code/addcode". Login required

router.post('/addcode', fetchuser, [
    body('question', 'Enter a valid question').isLength({ min: 3 }),
    body('category', 'Enter a valid category').isLength({ min: 3 }),
    body('usercode', 'Code must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    try {
        const { question, category, usercode } = req.body;

        // if there are errors return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const code = new Code({
            userid: req.user.id, question, usercode, category
        })
        const saveCode = await code.save();

        res.json(saveCode);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 3 : Update an existing Code using : PUT "api/code/updatecode". Login Required

router.put('/updatecode/:id', fetchuser, async (req, res) => {
    const { usercode } = req.body;

    try {

        // Create a new Code object
        const newCode = {};

        // if (question) { newCode.question = question }
        if (usercode) { newCode.usercode = usercode }
        // if (category) { newCode.category = category }

        // Find the code to be updated and update it
        let code = await Code.findById(req.params.id);
        if (!code) {
            return res.status(404).send("Not Found");
        }

        if (code.userid.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        code = await Code.findByIdAndUpdate(req.params.id, { $set: newCode }, { new: true });

        res.json({ code });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 4 : Delete an existing Code using : DELETE "api/code/deletecode". Login Required

router.delete('/deletecode/:id', fetchuser, async (req, res) => {

    try {

        // Find the note to be deleted and delete it
        let code = await Code.findById(req.params.id);
        if (!code) {
            return res.status(404).send("Not Found");
        }

        // Allow deletion only if user owns this Thread
        if (code.userid.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        code = await Code.findByIdAndDelete(req.params.id);

        res.json({ Success: "Code has been Deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 5 : Delete an existing Code using : DELETE "api/code/deletecodebyadmin".

router.delete('/deletecodebyadmin/:id', async (req, res) => {

    try {

        // Find the note to be deleted and delete it
        let code = await Code.findById(req.params.id);
        if (!code) {
            return res.status(404).send("Not Found");
        }

        code = await Code.findByIdAndDelete(req.params.id);

        res.json({ Success: "Code has been Deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;