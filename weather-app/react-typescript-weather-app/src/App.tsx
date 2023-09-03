import {useState} from 'react';
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import Loading from './components/Loading';
import './App.css';

type ResultsStateType = {
  country       : string;
  cityName      : string;
  temperature   : string;
  conditionText : string;
  icon          : string;
}

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    country       : "",
    cityName      : "",
    temperature   : "",
    conditionText : "",
    icon          : ""
  })
  // const getWeather = (e:any) => {
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetch(``)
    .then(res => res.json())
    .then(data => {
      setResults({
        country       :data.location.country,
        cityName      :data.location.name,
        temperature   :data.current.condition.temp_c,
        conditionText :data.current.condition.text,
        icon          :data.current.condition.icon
      })
    })
    .catch(err => alert("An error occurred. Please reload the page and try again."));
    setCity("");
    setLoading(false);
  };

  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} city={city}/>
      {/* <Results results={results}/> */}
      {/* {loading && <Loading />} */}
      {loading ? <Loading /> : <Results results={results} />}
    </div>
  );
}

export default App;
