const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let data = [
  { id: 1, message: 'Hello from the server!' }
];

app.get('/data', (req, res) => {
  res.json(data);
});

app.post('/data', (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.status(201).json(newData);
});

app.post('/clear', (req, res) => {
  data = [];
  res.status(200).json({ message: 'Data cleared' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
