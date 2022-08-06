{/* <script> */}

//スプレッドシートの最大行と列を設定
const MAX_ROW = 6;  //spreadsheet_data.lengthと合わせないといけない
const MAX_COL = 2;
//英語と日本語の設定
const ENG_WORD_COL = 0;
const JPN_WORD_COL = 1;

//問題数
const Q_CNT = 5;  //とりあえず5問

//スプレッドシートのデータ格納用配列を作る
let g_gas_data_arr = new Array(MAX_ROW);
for (let i = 0; i < g_gas_data_arr.length; i++){
  g_gas_data_arr[i] = new Array(MAX_COL);
}



// GASコード start^^^^^^^^^^^^^^^^^^^^^^^^^^^
//*********************************
//ファイルロード時の処理
//*********************************
// function loadingProcess(){
//   console.log("js loadingProcess() called");
//   //サーバーからスプレッドシートのデータを取得する
//   google.script.run.withSuccessHandler(getGASdata).GetSpreadsheet();
// }
// window.addEventListener('load', loadingProcess);


//*********************************
//GASのデータを取得
//*********************************
// function getGASdata(spreadsheet_data){
//   console.log("js getGASdata() called");

//   console.log("spreadsheet_data.length = ", spreadsheet_data.length);
//   for(let row = 0; row < spreadsheet_data.length; row++){
//     //最初のタイトル行を削除する分、サイズを1行分-1しておく
//     for(let col = 0; col < spreadsheet_data[row].length; col++){
//       //グローバル配列に設定
//       g_gas_data_arr[row][col] = spreadsheet_data[row][col];    //1行目（row=0)はタイトル文字が入っている。2行目（row=1)から設定する
//       console.log("g_gas_data_arr" + "[" + row + "]" + "[" + col + "]=" + g_gas_data_arr[row][col]);
//     }
//   }

//   //この場所じゃダメそう。。
//   //タイピング問題を初期化してスタート
//   init();
// }
// GASコード end^^^^^^^^^^^^^^^^^^^^^^^^^^^

//local用コードstart^^^^^^^^^^^^^^^^^^^^^^
//スプレッドシートのデータ格納用配列を作る
let spreadsheet_data = new Array(MAX_ROW);
for (let i = 0; i < spreadsheet_data.length; i++){
  spreadsheet_data[i] = new Array(MAX_COL);
}

//ここに英単語を入れてあげればとりあえずOK
for (let i = 0; i < spreadsheet_data.length; i++){
  spreadsheet_data[i][0]= "apple"
  spreadsheet_data[i][1]= "リンゴ";
}

for(let row = 0; row < spreadsheet_data.length; row++){
  //最初のタイトル行を削除する分、サイズを1行分-1しておく
  for(let col = 0; col < spreadsheet_data[row].length; col++){
    //グローバル配列に設定
    g_gas_data_arr[row][col] = spreadsheet_data[row][col];    //1行目（row=0)はタイトル文字が入っている。2行目（row=1)から設定する
    console.log("g_gas_data_arr" + "[" + row + "]" + "[" + col + "]=" + g_gas_data_arr[row][col]);
  }
}
//local用コードend^^^^^^^^^^^^^^^^^^^^^^


//まずHtmlの要素を格納
const subject = document.getElementById('subject');
const timer = document.getElementById('timer');  //カウントダウン用
const form = document.forms.typing;

//グローバル変数定義
let TIME = 30;            //カウントダウン用
let g_q_cnt = 0;          //問題数カウント用
let g_correct_cnt = 0;    //正解数カウント用
let g_answer = 0;         //回答のグローバル変数（あとで消す予定）
let state = true;         //問題を解いている最中かを状態管理（名前変えた方がよいかも）


//local用コードstart^^^^^^^^^^^^^^^^^^^^^^
//タイピング問題を初期化してスタート
init();
//local用コードend^^^^^^^^^^^^^^^^^^^^^^

//*********************************
//カウントダウン
//*********************************
const countdown = setInterval(function() {
  timer.textContent = '制限時間：' + --TIME + '秒';
  if(TIME <= 0) finish();
}, 1000);

//*********************************
//判定処理
//*********************************
function judge() {
  if(!state) return;  //すでに終了していたら操作させない

  // 正誤を判定
  // if(form.input.value === subject.textContent) {
  if(form.input.value === g_answer) {
    subject.textContent = '正解！';
    g_correct_cnt++;  //正解数をインクリメント
    // init();   //１問分を初期化
    setTimeout(function(){ init() },300) //3秒でタイムアウト

  } else {
    subject.textContent = '間違いです！正解は' + g_answer;
    setTimeout(function(){ init() },300) //3秒でタイムアウト
  }
}

//*********************************
//Enterイベント処理
//*********************************
// Enterキー押下時、送信処理が実行する
window.document.onkeydown = function(event){
    if (event.key === 'Enter') {
      judge();
    }
}

//*********************************
//初期化処理
//*********************************
function init() {
  //ランダムで問題をひとつ生成
  const rnd = Math.floor(Math.random() * g_gas_data_arr.length);

  console.log("init() rnd=", rnd);

  //暫定対応！！もし0ならやり直し
  if(0 === rnd){
    init();
    return;
  }

  //問題となる英単語をセット
  subject.textContent = g_gas_data_arr[rnd][0];
  //答えもセットしておく
  g_answer = g_gas_data_arr[rnd][1];

  form.input.value = '';  //入力欄を空白で初期化
  form.input.focus();     //フォーカスをあてる
}


//*********************************
//終了時の処理
//*********************************
function finish() {
  clearInterval(countdown); //タイマーストップ
  subject.textContent = '終了！正解数は' + g_correct_cnt + '問でした！';

  //終了後に操作できないようにする
  state = false;
}

// </script>
