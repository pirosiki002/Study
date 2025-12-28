const express = require('express');
const { userInfo } = require('os');
const app = express();
const path = require('path');

// app.use is all cover method
app.use(express.urlencoded({ extended: true }));
// json parse
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
  {
    id: 1,
    username: 'yamada',
    comment: 'he is a very funny man',
  },
  {
    id: 2,
    username: 'suzuki',
    comment: 'his hobby is bird watching',
  },
  {
    id: 3,
    username: 'tanaka',
    comment: 'what is funny point about Yamada',
  },
  {
    id: 4,
    username: 'bowwow',
    comment: 'wanwanwan',
  },
];

app.get('/comments', (req, res) => {
  // res.render('comments/index', {comments:comments});
  res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
  res.render('comments/new');
});

app.post('/comments', (req, res) => {
  // console.log(req.body);
  const { username, comment } = req.body;
  comments.push({ username, comment });
  // res.send('OK!!!!!!!!!!!');
  res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params; // string
  const comment = comments.find(c => c.id === parseInt(id));
  res.render('comments/show', { comment });
});

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
