//IDを変数に格納
var spreadsheetId = '1Z1PSuOGynbq9q1m4a5C_fR6KQdRXpAICxKd2K5xR_kM';

//実行時にwebサービスを実行させる
function doGet(e) {
  console.log("doGet() called");
  var t = HtmlService.createTemplateFromFile("index.html");
  return t.evaluate();
}

//スプレッドシートのデータを読み込む
function GetSpreadsheet(){

  console.log("GetSpreadsheet2() called");

  //操作するスプレッドシートIDとシート名を指定して開く
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('英単語一覧');
  
  //全データを取得するので、最終列と最終行を取得する
  var last_col = sheet.getLastColumn();  //最終列取得
  var last_row = sheet.getLastRow();     //最終行取得
  
  //データを取得する範囲を指定して取得し、2次元配列で返す
  return sheet.getRange(1, 1, last_row, last_col).getValues();
}
