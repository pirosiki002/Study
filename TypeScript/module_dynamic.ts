// import('./App')
//   .then(app =>{
//     app.showMessage();
//   });


async function main(){
  let app = await import('./App');
  app.showMessage();
}

main();