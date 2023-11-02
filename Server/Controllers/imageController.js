const path = require("path");
const fs = require("fs");

const uploadImage = async (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      return res.status(400).json({ message: "Please upload a file" });
    }
    res.status(200).json({ message: "File uploaded successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//
const getImages = async (req, res) => {
  const imageDirectory = path.join(__dirname, 'uploads');
  fs.readdir(imageDirectory, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Error reading directory" });
    }

    console.log(files);
    const imageFiles = files.filter((file) => {
      // Filter for image file extensions you want to include (e.g., jpg, jpeg, png, gif).
      return /\.(jpg|jpeg|png|gif|webp)$/i.test(file);
    });
    res.json({ images: imageFiles });
  });
};

module.exports = { uploadImage, getImages };