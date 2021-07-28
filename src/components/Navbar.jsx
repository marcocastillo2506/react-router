import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/water">
       states Of Water 
      </Link>
      <Link to="/guessGame">
       Guess Game
      </Link>
      <Link to="/todoList">
       Todo List
      </Link>
    </nav>
  );
};

