const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject('コネクションタイムアウト');
      } else {
        resolve(`ダミーデータ(${url})`);
      }
    }, delay);
  });
};

async function makeRequest() {
  try {
    const data1 = await fakeRequest('/hoge');
    console.log('data1=', data1);
  } catch (e) {
    console.log('error occured', e);
  }
}

makeRequest();

// const delayedColorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// delayedColorChange('red', 1000)
//   .then(() => delayedColorChange('orange', 1000))
//   .then(() => delayedColorChange('yellow', 1000))
//   .then(() => delayedColorChange('green', 1000))
//   .then(() => delayedColorChange('blue', 1000))
//   .then(() => delayedColorChange('indigo', 1000))
//   .then(() => delayedColorChange('violet', 1000));

// async function rainbow() {
//   await delayedColorChange('red', 1000);
//   console.log('yahoo!');
//   await delayedColorChange('orange', 1000);
// }

// async function printRainbow() {
//   await rainbow();
//   console.log('rainbow comp!!!');
// }

// printRainbow();

// rainbow().then(data => {
//   console.log('rainbow comp!', data);
// });

// const login = async (username, password) => {
//   if (!username || !password) {
//     throw new Error('nothing username or password');
//   }
//   if (password === 'secret') {
//     return 'welcome!!!';
//   }

//   throw new Error('password is wrong');
// };

// // login('hoge', 'hogehoge')
// login('hoge', 'secret')
//   .then(msg => {
//     console.log('login success', msg);
//   })
//   .catch(err => {
//     console.log('login error', err);
//   });

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
