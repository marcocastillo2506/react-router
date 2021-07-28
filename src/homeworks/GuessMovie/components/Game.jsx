import { useState } from "react";
import Header from "./Header";
import movies from "../movieData/movies.json";

export default function Game() {
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);
  const randomNumber = Math.floor(Math.random() * 10);
  const [message, setMessage] = useState("");
  const [messageClass, setMessageClass] = useState("");
  const [hide, setHide] = useState("");
  const [movieInput, setMovieInput] = useState("");
  const [movie, setMovie] = useState(randomNumber);

  function handleClick() {
    let answer = movieInput.toLowerCase();
    let correctEs = movies[movie].titleEs.toLowerCase();
    let correctEn = movies[movie].titleEn.toLowerCase();
    console.log(answer);
    if (answer === correctEs || answer === correctEn) {
      setPoints((prev) => prev + 1);
      setMovie((number) => number - 1);
      setMovieInput("");
      setMessageClass("success");
      setMessage("Correcto, continúa así");
    } else {
      setLives((current) => current - 1);
      setMessageClass("wrong");
      setMessage("Te has equivocado, vuelve a intentarlo");
    }

    if (lives <= 1) {
      setLives(lives - 1);
      setHide("hide");
      setMessage("Juego finalizado, has perdido. 😔");
    }

    if (points === 4) {
      setPoints(points + 1);
      setHide("hide");
      setMovie(0);
      setMessageClass("won");
      setMessage("¡¡FELICIDADES, HAZ GANADO!! 🎊🎊🎊");
    }
  }

  return (
    <div className="App">
      <Header lives={lives} points={points} />
      <h1 className="title">Guess the movie</h1>
      <p id={hide} className="emoji-movie">
        {movies[movie].emoji}
      </p>
      <div>
        <input
          name="movie-input"
          className="movie-input"
          id={hide}
          type="text"
          placeholder="Guess the movie..."
          value={movieInput}
          onChange={(e) => setMovieInput(e.target.value)}></input>
        <hr />
        <button
          type="submit"
          name="submit"
          className="btn sendBtn"
          id={hide}
          onClick={handleClick}>
          Enviar
        </button>
        <p className={messageClass} id="message">
          {message}
        </p>
      </div>
    </div>
  );
}
