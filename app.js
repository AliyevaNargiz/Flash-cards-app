// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import FlashCardList from './components/FlashCardList';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/flash-cards">Flash Cards</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Route path="/" exact component={Home} />
        <Route path="/flash-cards" component={FlashCardList} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default App;
