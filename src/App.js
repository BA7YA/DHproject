import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import './App.css';
import Header from './Main components/Header/View/Header';
import Todo from './Pages/Todo/View/Todo';

function App() {
  return (
    <>
      <Router>
        <div className="header-block">
           <Header />
        </div>
        <div className="body-block">
          <Route exact path="/">
              <Todo />
          </Route>
        </div> 
      </Router>
    </>
  );
}

export default App;
