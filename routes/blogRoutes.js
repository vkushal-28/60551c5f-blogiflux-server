const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const { verifyJJWT } = require("../middleware/jwt");

// Get counts of latest blogs (POST)
router.post("/all-latest-blogs-count", blogController.getLatestBlogsCount);

// Get counts of latest blogs (POST)
router.post("/latest-blogs", blogController.getLatestBlogs);

// Get counts of trending blogs (POST)
router.get("/trending-blogs", blogController.getTrendingBlogs);

// Get counts of latest blogs (POST)
router.post("/search-blogs", blogController.getSearchedBlogs);

// // Get counts of latest blogs (POST)
router.post("/get-blog", blogController.getBlogDetails);

// Get counts of latest blogs (POST)
router.post("/search-blogs-count", blogController.getSearchedBlogCount);

// Get counts of latest blogs (POST)
router.post("/create-blog", verifyJJWT, blogController.createBlog);

// Get counts of latest blogs (POST)
router.post("/delete-blog", verifyJJWT, blogController.deleteBlog);

// Like Blog (POST)
router.post("/like-blog", verifyJJWT, blogController.likeBlog);

// Is liked by user (POST)
router.post("/isLiked-by-user", verifyJJWT, blogController.isLikedByUser);

// Get user written blogs (POST)
router.post(
  "/user-written-blogs",
  verifyJJWT,
  blogController.getUserWrittenBlogs
);

// Get user written blogs count (POST)
router.post(
  "/user-written-blogs-count",
  verifyJJWT,
  blogController.getUserWrittenBlogsCount
);
module.exports = router;
