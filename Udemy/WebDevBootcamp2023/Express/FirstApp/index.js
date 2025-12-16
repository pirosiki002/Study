const express = require('express');
const app = express();

// app.use((req, res) => {
//   console.log('i received your request');
//   //   console.dir(req);
//   //   res.send('ill respond req to you');
//   //   res.send({ color: 'red' });
//   res.send('<h1>my first Web page</h1>');
// });

app.get('/cats', (req, res) => {
  console.log(`i received URL of /cats`);
  res.send('meow');
});

app.post('/cats', (req, res) => {
  res.send('i received post request of /cats');
});

app.get(`/dogs`, (req, res) => {
  console.log(`i received URL of /dogs`);
  res.send('bow wow');
});

app.get('/', (req, res) => {
  console.log('here is HP');
  res.send('HP home');
});

app.get('/r/:subreddit/:postId', (req, res) => {
  // console.log('params', req.params);
  const { subreddit, postId } = req.params;
  res.send(`<h1>here is subreddit ${subreddit}page Post ID: ${postId}</h1>`);
});

// order is important
app.get(/(.*)/, (req, res) => {
  res.send('unknown pass');
});

app.listen(8080, () => {
  console.log('im receiving your req with port 8080...');
});
