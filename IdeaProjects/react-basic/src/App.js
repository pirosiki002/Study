import logo from './logo.svg';
import './App.css';
import ToggleButton from './components/ToggleButton';

function App() {

  // let fruits = {
  //   apple:'りんご',
  //   banana:'バナナ',
  //   lemon:'レモン'
  // };

  // let copyFruits = fruits;

  // copyFruits.lemon = 'れもん';

  // console.log(fruits);

  // ---------------------------

  // let fruit1 = {
  //   banana:'バナナ',
  //   melon:'メロン'
  // };

  // let fruit2 = {
  //   apple:'りんご',
  //   grape:'ぶどう'
  // };

  // let mergeFruits = Object.assign(fruit1, fruit2);

  // console.log("mergeFruits=", mergeFruits);
  // console.log("fruit1=", fruit1);
  // console.log("fruit2=", fruit2);

// ------------------------

  // let fruits = {
  //   apple:'りんご',
  //   banana:'バナナ',
  //   lemon:'レモン'
  // };

  // let copyFruits = fruits;


  // copyFruits = Object.assign({}, fruits);
  // copyFruits.lemon = 'れもん';

  // console.log("fruits =", fruits);
  // console.log("copyFruits =", copyFruits);
// ------------------------

  // let fruits = {
  //   apple:'りんご',
  //   banana:'バナナ',
  //   other:{
  //     watermelon:'スイカ'
  //   }
  // };

  // let copyFruits = fruits;

  // copyFruits = Object.assign({}, fruits);
  // copyFruits.other.watermelon = '西瓜？？';

  // console.log({fruits});
  // console.log({copyFruits});

// ------------------------

  // let fruits = {
  //   apple:'りんご',
  //   banana:'バナナ',
  //   other:{
  //     watermelon:'スイカ'
  //   }
  // };

  // let copyFruits = fruits;

  // copyFruits = JSON.parse(JSON.stringify(fruits));
  // copyFruits.other.watermelon = '西瓜？？？';

  // console.log({fruits});
  // console.log({copyFruits});

// ------------------------

  // let sweets1 = {
  //   cookie:'クッキー',
  //   chocolate:'チョコレート',
  //   candy:'アメちゃん',
  // };

  // let sweets2 = {
  //   poteto:'ポテト',
  //   ...sweets1,
  //   // sweets1,
  //   poteto_stick:'じゃがりこ'
  // };

  // sweets2.cookie = "Cookie!!";

  // console.log({sweets1});
  // console.log({sweets2});
// ------------------------
  // let fruits = {
  //   apple:'りんご',
  //   banana:'バナナ',
  //   lemon:'レモン'
  // };

  // let copyFruits = {
  //   ...fruits
  // };

  // copyFruits.lemon = '檸檬';

  // console.log({fruits});
  // console.log({copyFruits});

// ------------------------

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          新・日本一わかりやすいReact入門シリーズで環境構築しました！
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ToggleButton></ToggleButton>
    </div>
  );
}

export default App;
