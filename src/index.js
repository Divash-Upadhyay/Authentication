const express = require("express");

const connect = require("./configs/db");
const userController = require("./controllers/user.controller");
const postController = require("./controllers/post.controller");
const {register , login}= require("./controllers/auth.controller")

const app = express();
app.use(express.json());



app.post("/register", register);

app.post("/login", login); 

app.use("/user", userController);

app.use("/posts", postController);

app.listen(2345, async () => {
    try {
      await connect();
    } catch (err) {
      console.error(err.message);
    }
    console.log("listening on port 2345");
  });
