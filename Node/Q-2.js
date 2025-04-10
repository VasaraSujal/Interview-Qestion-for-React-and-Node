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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});