const express = require("express");
const router = express.Router();
const tagController = require("../controllers/tagController");

// Get all tags (GET)
router.get("/tags", tagController.getAllTags);

// Create tag (POST)
router.post("/tag/create", tagController.createTag);

// Update tag details (PUT)
router.put("/tag/:id", tagController.updateTag);
module.exports = router;
