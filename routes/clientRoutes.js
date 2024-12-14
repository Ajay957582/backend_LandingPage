const express = require("express");
const { createClient, getClients } = require("../controllers/clientController");
const router = express.Router();

router.post("/", createClient).get("/", getClients);

module.exports = router;
