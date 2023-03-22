const express = require("express");
const contactUsRouter = require("./routers");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use("/", contactUsRouter);

// start the server
app.listen(process.env.PORT, () => {
  console.log(`⚡ Server listening at Port: ${process.env.PORT}`);
});
