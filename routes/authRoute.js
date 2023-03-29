const express = require('express');
const { createUser, loginUserCtrl,
     getAllUser,getSigleUser,
     deleteSigleUser,updateSigleUser } = require('../contoller/userCtrl');
const router =  express.Router();



router.post("/register",createUser);
router.post("/login",loginUserCtrl);
router.get("/getall",getAllUser);
router.get("/:id",getSigleUser);
router.delete("/:id",deleteSigleUser);
router.put("/:id",updateSigleUser);






module.exports = router ;