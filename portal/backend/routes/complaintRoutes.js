const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");
const getPriority = require("../utils/priorityPredictor");

// ✅ CREATE Complaint
// router.post("/", async (req, res) => {
//   try {
//     const complaint = new Complaint(req.body);
//     const savedComplaint = await complaint.save();

//     res.status(201).json(savedComplaint);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
router.post("/", async (req, res) => {
  try {
    const { description } = req.body;

    // 🔥 ML Logic Applied
    const autoPriority = getPriority(description);

    const complaint = new Complaint({
      ...req.body,
      priority: autoPriority, // override user input
    });

    const savedComplaint = await complaint.save();

    res.status(201).json(savedComplaint);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// ✅ GET all complaints
router.get("/", async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ UPDATE complaint status
router.put("/:id", async (req, res) => {
  try {
    const updated = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ DELETE complaint
router.delete("/:id", async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id);
    res.json({ message: "Complaint deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;