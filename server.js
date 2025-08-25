const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let todos = [];

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const todo = { id: Date.now(), text: req.body.text };
  todos.push(todo);
  res.jsson(todo);
});

app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  res.json({ success: true });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"))
