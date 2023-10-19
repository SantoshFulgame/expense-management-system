const express = require('express');
const { loginController, registerController } = require('../controller/userController');

// Create a router object
const router = express.Router();

// Define routes
// POST || LOGIN 
router.post('/login', loginController);

// POST || REGISTER USER
router.post('/register', registerController);

// Export the router
module.exports = router;
