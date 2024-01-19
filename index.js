const express = require("express");
const upload = require("./config/file-upload-config");
const app = express();

const singleUploader = upload.single("image");

app.post("/upload", singleUploader, (req, res) => {
  try {
    return res.status(200).json({
      msg: "Successfully Uploaded the image",
    });
  } catch (error) {
    res.status(400).json({
      msg: "Error in uploading image",
      error: error,
    });
  }
});

app.listen(3000, () => {
  console.log("Server is Running on PORT 3000");
});
