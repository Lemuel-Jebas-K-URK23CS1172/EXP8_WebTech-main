import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import assignmentRoutes from "./routes/assignmentRoutes.js";

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

// Your routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend working on Vercel!' });
});

module.exports = app;  // 👈 IMPORTANT for Vercel
