const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users = [];
let results = [];

// Create user
app.post("/user", (req, res) => {
  const { name, email } = req.body;

  const user = {
    id: users.length + 1,
    name,
    email
  };

  users.push(user);

  res.json(user);
});

// Save score
app.post("/score", (req, res) => {
  const { user_id, score } = req.body;

  const result = {
    user_id,
    score,
    date: new Date()
  };

  results.push(result);

  res.json(result);
});

// Get scores
app.get("/scores/:user_id", (req, res) => {
  const data = results.filter(
    r => r.user_id == req.params.user_id
  );

  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
