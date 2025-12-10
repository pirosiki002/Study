const express = require('express');
const app = express();

app.use((req, res) => {
  console.log('i received your request');
  //   console.dir(req);
  //   res.send('ill respond req to you');
  //   res.send({ color: 'red' });
});

app.listen(8080, () => {
  console.log('im receiving your req with port 8080...');
});
