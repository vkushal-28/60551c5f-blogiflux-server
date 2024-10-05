const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { verifyJJWT } = require("../middleware/jwt");

// const { validateContact } = require("../middleware/validationMiddleware");

// Sign Up (POST)
router.post("/signup", userController.signUp);

// Sign In (POST)
router.post("/signin", userController.signIn);

// Signin through Google Auth (POST)
router.post("/google-auth", userController.googleAuth);

// Change User Password (POST)
router.post("/change-password", verifyJJWT, userController.changePassword);

// Get search users list (POST)
router.post("/search-users", userController.searchUsers);

// Get profile details (POST)
router.post("/get-profile", userController.getProfileDetails);

// Get profile details (POST)
router.post(
  "/update-profile-image",
  verifyJJWT,
  userController.updateProfileImage
);

// Get profile details (POST)
router.post("/update-profile", verifyJJWT, userController.updateProfile);

// Get uploaded url (GET)
router.get("/get-upload-url", userController.getUploadUrl);

module.exports = router;
