import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import assignmentRoutes from "./routes/assignmentRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://chijithjerin_db_user:Y7ojh6iJZXdKvOf8@hacklehem.76wdx41.mongodb.net/virtual_classroom?retryWrites=true&w=majority&appName=Hacklehem", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/assignments", assignmentRoutes);

app.listen(5000, () => console.log("✅ Server running on port 5000"));
