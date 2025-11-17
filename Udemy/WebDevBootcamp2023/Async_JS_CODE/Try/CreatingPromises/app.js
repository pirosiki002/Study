// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext();
//   }, delay);
// };

// delayedColorChange('red', 1000, () => {
//   delayedColorChange('orange', 1000, () => {
//     delayedColorChange('yellow', 1000, () => {
//       delayedColorChange('green', 1000, () => {
//         delayedColorChange('blue', 1000, () => {
//           delayedColorChange('indigo', 1000, () => {
//             delayedColorChange('violet', 1000, () => {});
//           });
//         });
//       });
//     });
//   });
// });

/**
 * 指定した色に変更する関数
 *
 * @param {new color} newColor
 * @param {delay time} delay
 */
const delayedColorChange = (newColor, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      resolve();
      // doNext && doNext();
    }, delay);
  });
};

delayedColorChange('red', 1000)
  .then(() => delayedColorChange('orange', 1000))
  .then(() => delayedColorChange('yellow', 1000))
  .then(() => delayedColorChange('green', 1000))
  .then(() => delayedColorChange('blue', 1000))
  .then(() => delayedColorChange('indigo', 1000))
  .then(() => delayedColorChange('violet', 1000));

// delayedColorChange('red', 1000, () => {
//   return delayedColorChange('orange', 1000);
// })
// delayedColorChange('red', 1000)
//   .then(() => {
//     return delayedColorChange('orange', 1000);
//   })
//   .then(() => {
//     return delayedColorChange('yellow', 1000);
//   })
//   .then(() => {
//     return delayedColorChange('green', 1000);
//   })
//   .then(() => {
//     return delayedColorChange('blue', 1000);
//   })
//   .then(() => {
//     return delayedColorChange('indigo', 1000);
//   })
//   .then(() => {
//     return delayedColorChange('violet', 1000);
//   });
