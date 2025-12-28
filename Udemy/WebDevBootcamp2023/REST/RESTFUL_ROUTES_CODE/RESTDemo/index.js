const express = require('express');
const { userInfo } = require('os');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');

// app.use is all cover method
app.use(express.urlencoded({ extended: true }));
// json parse
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
  {
    id: uuid(),
    username: 'yamada',
    comment: 'he is a very funny man',
  },
  {
    id: uuid(),
    username: 'suzuki',
    comment: 'his hobby is bird watching',
  },
  {
    id: uuid(),
    username: 'tanaka',
    comment: 'what is funny point about Yamada',
  },
  {
    id: uuid(),
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
  comments.push({ username, comment, id: uuid() });
  // res.send('OK!!!!!!!!!!!');
  res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/show', { comment });
});

app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  // console.log(req.body.comment);
  const newCommentText = req.body.comment;
  const foundComment = comments.find(c => c.id === id);
  foundComment.comment = newCommentText;
  // res.send('Patch!!!!!');
  res.redirect('/comments');
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
