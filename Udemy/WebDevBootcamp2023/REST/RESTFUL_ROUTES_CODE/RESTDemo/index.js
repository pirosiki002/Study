const express = require('express');
const app = express();

// app.use is all cover method
app.use(express.urlencoded({ extended: true }));
// json parse
app.use(express.json());

app.get('/tacos', (req, res) => {
  res.send('GET /tacos response');
});

app.post('/tacos', (req, res) => {
  // console.log('req.body', req.body);
  const { meat, qty } = req.body;
  // res.send('POST /tacos response');
  res.send(`${qty} ${meat} take this!`);
});

app.listen(3000, () => {
  console.log('waiting with Port3000');
});
