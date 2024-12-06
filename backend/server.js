const express = require("express");
const Post = require("./models/Post/Post");

const app = express();

//! PORT
const PORT = 5000;

//! middlewares

app.use(express.json()); // pass json data

//! create post
app.post("/api/v1/posts/create", async (req, res) => {
  try {
    //get the payload
    const postData = req.body;
    const postCreated = await Post.create(postData);
    res.json({
      status: "success",
      message: "Post created successfully",
      postCreated,
    });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});
// ! list post
// ! update post
// ! get post

//!Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
