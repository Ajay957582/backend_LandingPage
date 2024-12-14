const express = require("express");
const {
  createSubscriber,
  giveSubscribersList,
} = require("../controllers/subscribersController");
const router = express.Router();

router.post("/", createSubscriber).get("/", giveSubscribersList);
module.exports = router;
