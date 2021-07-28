import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "./components/Container";
import Navbar from "./components/Navbar";
import GuessTheMovie from "./homeworks/GuessMovie/Movie";
import Water from "./homeworks/StateOfWater/Water";
import List from "./homeworks/TodoList/List";
import './App.css';

function App() {
  return (
    <Router>
    <section className="app">
      <Navbar />
      <Container>
        <Switch>
          <Route path="/water">
            <Water />
          </Route>
          <Route path="/guessGame">
            <GuessTheMovie />
          </Route>
          <Route path="/todoList">
            <List />
          </Route>
        </Switch>
      </Container>
    </section>
  </Router>
  );
}

export default App;
