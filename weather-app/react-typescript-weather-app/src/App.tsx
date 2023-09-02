import {useState} from 'react';
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import './App.css';

type ResultsStateType = {
  country       : string;
  cityName      : string;
  temperature   : string;
  conditionText : string;
  icon          : string;
}

function App() {
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
    fetch(`https://api.weatherapi.com/v1/current.json?key=5099f41b9f8c4d459cd72424233108&q=${city}&aqi=no`)
    .then(res => res.json())
    .then(data => {
      setResults({
        country       :data.location.country,
        cityName      :data.location.name,
        temperature   :data.current.condition.temp_c,
        conditionText :data.current.condition.text,
        icon          :data.current.condition.icon
      })
    });
  };

  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results results={results}/>
    </div>
  );
}

export default App;
