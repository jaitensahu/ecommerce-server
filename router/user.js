const express = require("express");
const router = express.Router();
const apis = require("../controller/user");
router.post("/registration", apis.userRegistration);
router.get("/login", apis.login);
module.exports = router;    