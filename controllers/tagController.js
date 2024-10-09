const Tag = require("../models/Tag");

// Get all tags
exports.getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.json({ tags });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create tag
exports.createTag = async (req, res) => {
  try {
    const { name, tag_field } = req.body;
    const newTag = new Tag({ name, tag_field });
    await newTag.save();
    res.status(201).json(newTag);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

// Update tag
exports.updateTag = async (req, res) => {
  try {
    const { name, tag_field } = req.body;
    const updatedTag = await Tag.findByIdAndUpdate(
      req.params.id,
      { name, tag_field },
      { new: true, runValidators: true }
    );
    if (!updatedTag) return res.status(404).json({ message: "Tag not found" });
    res.json(updatedTag);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
