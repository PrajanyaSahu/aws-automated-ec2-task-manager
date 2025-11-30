const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// simple in-memory task list
let tasks = [
  { id: 1, title: "First task", completed: false }
];

app.get("/", (req, res) => {
  res.send("Task Manager API is running");
});

app.get("/api/health", (req, res) => {
  console.log("GET /api/health");
  res.json({ status: "ok" });
});

app.get("/api/tasks", (req, res) => {
  console.log("GET /api/tasks");
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  console.log("POST /api/tasks", req.body);
  const { title } = req.body;
  const newTask = { id: Date.now(), title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
