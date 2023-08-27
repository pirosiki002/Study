// let Counter = function() {
//     // 現在のthisを退避
//     let _this = this;
//     _this.count = 0;

//     // count property ++ 1000mm sec per
//     setInterval(function(){
//         _this.count ++;
//     },1000);
// };

let Counter = function(this:any) { 
    // 現在 の this を 退避 
    let _this = this; 
    _this. count = 0; 
    // 1000 ミリ 秒 間隔 で count プロパティ を インクリメント 
    setInterval( function() { _this. count ++; }, 1000); 
};