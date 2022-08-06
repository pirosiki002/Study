//alert("js test");


//まずHtmlの要素を格納
const subject = document.getElementById('subject');
const timer = document.getElementById('timer');  //カウントダウン用
const form = document.forms.typing;

//問題文の構造体
const textList = [
  'apple',
  'banana',
  'orange',
  'peach',
  'pine'
];

//グローバル変数定義
let TIME = 20;  //カウントダウン用
let count = 0;  //正解数カウント用
let state = true; //問題を解いている最中かを状態管理（名前変えた方がよいかも）


//最初に１回目を実行
init();

//*********************************
//カウントダウン
//*********************************
const countdown = setInterval(function() {
  timer.textContent = '制限時間：' + --TIME + '秒';
  if(TIME <= 0) finish();
// }, 1000);  
}, 5000);  

//*********************************
//ボタン押下時の処理
//*********************************
// form.btn.addEventListener('click', function(e) {
//   judge();
// });

// init(); //この処理はいるのかな？？


//*********************************
//判定処理
//*********************************
function judge() {
  if(!state) return;  //すでに終了していたら操作させない

  // 正誤を判定
  if(form.input.value === subject.textContent) {
    subject.textContent = '正解！';
    count++;  //正解数をインクリメント
    // init();   //１問分を初期化
    setTimeout(function(){ init() },300) //3秒でタイムアウト

  } else {
    subject.textContent = '間違いです！';
    setTimeout(function(){ init() },300) //3秒でタイムアウト
  }
}

//*********************************
//Enterイベント処理
//*********************************
// var input_text = document.getElementById('input_text'); //使ってなくない？？？

// Enterキー押下時、送信処理が実行する
window.document.onkeydown = function(event){
    if (event.key === 'Enter') {
      console.log("Enter keyが押された！！");
      judge();
    }
}

//*********************************
//初期化処理
//*********************************
function init() {
  //ランダムで問題をひとつ生成
  const rnd = Math.floor(Math.random() * textList.length);

  subject.textContent = textList[rnd];
  form.input.value = '';  //入力欄を空白で初期化
  form.input.focus();     //フォーカスをあてる
}


//*********************************
//終了時の処理
//*********************************
function finish() {
  clearInterval(countdown); //タイマーストップ
  subject.textContent = '正解数は' + count + '個でした！';

  //終了後に操作できないようにする
  state = false;
}