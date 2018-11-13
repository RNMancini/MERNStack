const express = require('express');
const router = express.Router();

// Load user model
const User = require('../../models/User');

router.get('/test', (req, res) => res.json({msg: 'Users Works'}));

router.post('/register', (req, res) => User.findOne({ email: req.body.email }) 
});

module.exports = router;