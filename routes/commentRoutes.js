const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const { verifyJJWT } = require("../middleware/jwt");

// Add new comment (POST)
router.post("/add-comment", verifyJJWT, commentController.addComment);

// Get blog comments (POST)
router.post("/get-blog-comments", commentController.getBlogComments);

// Get comment replies (POST)
router.post("/get-replies", commentController.getReplies);

// Delete comment replies (POST)
router.post("/delete-comment", verifyJJWT, commentController.deleteComment);

module.exports = router;
