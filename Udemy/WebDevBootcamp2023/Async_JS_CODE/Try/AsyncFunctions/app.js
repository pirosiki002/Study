async function hello() {}

const sing = async () => {
  throw new Error('error occered');
  return 'hogehoge';
};

sing()
  .then(data => {
    console.log('success', data);
  })
  .catch(err => {
    console.log('failed', err);
  });
