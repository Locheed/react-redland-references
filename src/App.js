import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import References from './Container/References';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/references/" component={References} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
