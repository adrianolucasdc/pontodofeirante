const express = require("express");

const UserController = require("../../app/controller/UserController");

const router = express.Router();


router.get("/users", UserController.index);
router.get("/users/update", UserController.index);

module.exports = router;