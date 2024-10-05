const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");
const { verifyJJWT } = require("../middleware/jwt");

// New notification (GET)
router.get(
  "/new-notification",
  verifyJJWT,
  notificationController.newNotification
);

// Notifications (POST)
router.post("/notifications", verifyJJWT, notificationController.notifications);

// All notification count (POST)
router.post(
  "/all-notifications-count",
  verifyJJWT,
  notificationController.allNotificationCount
);

module.exports = router;
