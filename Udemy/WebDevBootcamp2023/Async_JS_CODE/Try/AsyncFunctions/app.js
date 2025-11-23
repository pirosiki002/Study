const login = async (username, password) => {
  if (!username || !password) {
    throw new Error('nothing username or password');
  }
  if (password === 'secret') {
    return 'welcome!!!';
  }

  throw new Error('password is wrong');
};

// login('hoge', 'hogehoge')
login('hoge', 'secret')
  .then(msg => {
    console.log('login success', msg);
  })
  .catch(err => {
    console.log('login error', err);
  });

// async function hello() {}

// const sing = async () => {
//   throw new Error('error occered');
//   return 'hogehoge';
// };

// sing()
//   .then(data => {
//     console.log('success', data);
//   })
//   .catch(err => {
//     console.log('failed', err);
//   });
