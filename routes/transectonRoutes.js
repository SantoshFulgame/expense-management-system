const express = require('express');
const { addTransection, 
    getAllTransecton,
    editTransection,
    deleteTransection,
 } = require('../controller/transectionCtrl');


// Create a router object
const router = express.Router();

// Define routes
//add transections POST method
router.post("/add-transection",addTransection);

//Edit transections POST method
router.post("/edit-transection",editTransection);

//Delete transections POST method
router.post("/delete-transection",deleteTransection);

router.post("/get-transection", getAllTransecton)

// Export the router
module.exports = router;
