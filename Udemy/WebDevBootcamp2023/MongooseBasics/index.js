const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:207017/movieApp', {
mongoose
  .connect('mongodb://localhost:27017/movieApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connection OK!!!!');
  })
  .catch(err => {
    console.log('connection Error!!!!!!!!');
    console.log(err);
  });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   // we're connected!!!!
//   console.log('we are connected!!!');
// });
