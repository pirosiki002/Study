const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve('this is dummy data');
        // return;
      } else {
        reject('connection is timeout');
      }
    }, 1000);
  });
};

fakeRequest('/hoge')
  .then(data => {
    console.log('success', data);
  })
  .catch(err => {
    console.log('error', err);
  });

// new Promise((resolve, reject) => {
//   resolve();
// });
