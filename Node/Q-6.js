const express = require("express");
const app = express();
const port = 3000;

const users = [
    { id: 1, name: 'Sujal' },
    { id: 2, name: 'Kalp' },
    { id: 3, name: 'Prem' }
  ];

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.get('/users', (req, res) => {
    res.json(users);
})

app.patch('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
  
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    if (req.body.name) user.name = req.body.name;
    if (req.body.email) user.email = req.body.email;
  
    res.json({ message: 'User updated', user });
  });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})