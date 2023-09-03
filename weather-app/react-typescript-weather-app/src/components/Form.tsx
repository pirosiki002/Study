// Form.tsx

type FormPropsType = {
  city : string;
  setCity     :React.Dispatch<React.SetStateAction<string>>;
  getWeather  :(e: React.FormEvent<HTMLFormElement>) => void;
}

// const Form = ({setCity, getWeather}: FormPropsType) => {
const Form = ({setCity, getWeather, city}: FormPropsType) => {
    return (
    <form onSubmit={getWeather}>
      <input type="text" name="city" placeholder="urban name" onChange={e => setCity(e.target.value)} value={city}/>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;