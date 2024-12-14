const express = require("express");
const {
  createContact,
  giveContactArray,
} = require("../controllers/contactController");
const router = express.Router();
router.post("/", createContact).get("/", giveContactArray);
module.exports = router;
