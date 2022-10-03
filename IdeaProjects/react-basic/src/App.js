import logo from './logo.svg';
import './App.css';

function App() {

  // デバッグ用のソースマップサポート
  // 例外発生時に CoffeeScript の行番号を出すことができる
  // require('source-map-support').install();

  // ここからが本文
  var JapaneseHolidays = require('japanese-holidays');

  // var today = new Date();
  var today = new Date('2022-10-1');

  var holiday = JapaneseHolidays.isHoliday(today);

  var dayOfWeek = today.getDay() ;	// 曜日(数値)

  console.log('dayOfWeek =', dayOfWeek);
  if((6 === dayOfWeek) || (0 === dayOfWeek)){
    console.log(today + "は 土日 です");
  }
  else{
    if(holiday) {
      console.log(today + "は " + holiday + " です");
    } else {
        console.log(today + "は祝日ではありません");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
