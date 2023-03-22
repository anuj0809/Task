const express = require("express");
const contactUsRouter = express.Router();

const { SayHello, ContactUs } = require("../controllers");

contactUsRouter.get("/", SayHello);
contactUsRouter.post("/contact-us", ContactUs);

module.exports = contactUsRouter;
