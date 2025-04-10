const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const users = [
    { id: 1, name: 'Sujal' },
    { id: 2, name: 'Kalp' },
    { id: 3, name: 'Prem' }
  ];

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
