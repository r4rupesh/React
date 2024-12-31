import { useEffect, useState } from "react";
import "./Joker.css";
export default function Joker() {
  const url = "https://official-joke-api.appspot.com/jokes/random";
  let [joke, setJoke] = useState({});
  const newJoke = async () => {
    let rawData = await fetch(url);
    let data = await rawData.json();
    setJoke({ setup: data.setup, punchline: data.punchline });
  };

  useEffect(() => {
    async function intialJoke() {
      let rawData = await fetch(url);
      let data = await rawData.json();
      setJoke({ setup: data.setup, punchline: data.punchline });
    }
    intialJoke();
}, []);

  return (
    <div className="container">
      <h1>Joker!</h1>
      <h3>{joke.setup}</h3>
      <h3>{joke.punchline}</h3>
      <button onClick={newJoke}>Joke</button>
    </div>
  );
}
