const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email !== 'abc@abc.com' || password !== '123456') {
    return res.status(401).json({
      success: false,
      message: 'Invalid credential',
    });
  }
  const token = jwt.sign({ id: 1 }, 'secret');

  res.status(200).json({
    success: true,
    token,
  });
});

app.listen(3010, () => {
  console.log('Server up on 3010...');
});
