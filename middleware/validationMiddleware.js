const { body } = require("express-validator");

// Validation for Contact
exports.validateContact = [
  body("firstName")
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 characters long."),
  body("lastName")
    .isLength({ min: 3 })
    .withMessage("Last name must be at least 3 characters long."),
  body("email").isEmail().withMessage("Please provide a valid email address."),
  body("message")
    .isLength({ min: 10 })
    .withMessage("Message must be at least 10 characters long."),
];

// Validation for Project
exports.validateProject = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters long"),
  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters long"),
  body("technologies")
    .isArray()
    .withMessage("Technologies must be an array")
    .notEmpty()
    .withMessage("Technologies are required"),
  body("image").optional().notEmpty().withMessage("Project image is required"),
  body("demoLink")
    .optional()
    .isURL()
    .withMessage("Demo link must be a valid URL"),
  body("codeLink")
    .optional()
    .isURL()
    .withMessage("Code link must be a valid URL"),
  body("projectType")
    .notEmpty()
    .withMessage("Project type is required")
    .isIn(["web", "mobile", "desktop"])
    .withMessage("Project type must be one of: web, mobile, desktop"),
];
