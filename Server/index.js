const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.json());

const imageDirectory = path.join(__dirname, 'uploads');

app.use('/uploads', express.static(imageDirectory));

app.get('/api/get-images', (req, res) => {
  fs.readdir(imageDirectory, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading directory' });
    }

    const imageFiles = files.filter((file) => {
      // Filter for image file extensions you want to include (e.g., jpg, jpeg, png, gif).
      return /\.(jpg|jpeg|png|gif|webp)$/i.test(file);
    });

    res.json({ images: imageFiles });
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
