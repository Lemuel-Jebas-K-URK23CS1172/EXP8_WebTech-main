import express from "express";
import Assignment from "../models/Assignment.js";

const router = express.Router();

// Add Assignment
router.post("/", async (req, res) => {
  const { title, subject, dueDate, description } = req.body;
  const assignment = new Assignment({ title, subject, dueDate, description });
  await assignment.save();
  res.json({ message: "Assignment Added Successfully" });
});

// Get All Assignments
router.get("/", async (req, res) => {
  const assignments = await Assignment.find();
  res.json(assignments);
});

// Delete Assignment
router.delete("/:id", async (req, res) => {
  await Assignment.findByIdAndDelete(req.params.id);
  res.json({ message: "Assignment Deleted" });
});

export default router;
