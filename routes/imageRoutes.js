const express = require("express");
const multer = require("multer");
const path = require("path");
const Image = require("../models/Image");

const router = express.Router();

// Multer setup for local storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // folder to save files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

const upload = multer({ storage });

// Upload image 
router.post("/upload", upload.single("image"), async (req, res) => {
    try {
      // Normalize the path (convert \ to /)  images\\path.jpeg
      const normalizedPath = req.file.path.replace(/\\/g, "/");
  
      const newImage = new Image({
        name: req.file.originalname,
        path: normalizedPath,   // save clean path
        contentType: req.file.mimetype,
        category:req.body.category
      });
      await newImage.save();
  
      res.status(201).json({ 
        message: "Image uploaded successfully", 
        id: newImage._id,
        path: normalizedPath   // return clean path too
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// Get all images metadata
router.get("/", async (req, res) => {
  try {
    const images = await Image.find({}, "name path _id");
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get image by ID
router.get("/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) return res.status(404).json({ error: "Image not found" });

    res.sendFile(path.resolve(image.path));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
