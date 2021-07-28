import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/rules">
        <button className="btn">Reglas</button>
      </Link>
      <Link to="/game">
        <button className="btn">Juego</button>
      </Link>
    </nav>
  );
}
