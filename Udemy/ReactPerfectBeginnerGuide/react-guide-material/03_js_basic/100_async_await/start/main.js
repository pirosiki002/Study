// 非同期処理（Promise）
let a = 0;

init();
async function init(){
    try{

        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                a = 1;
                // resolve(a)
                reject(a);
            }, 2000);
        })
    }catch(e){
        console.log('catch done', e);
    }

    console.log(a);
    // console.log(result);
    
}

// }).then((b) => {
//     console.log(b);
//     return b;
// }).then((b) => {
//     console.log(b);
// }).catch((c) => {
//     console.log('catchが実行', c)
// })


