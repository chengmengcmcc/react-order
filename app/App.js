import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Home from './pages/Home';
import Balance from './pages/Balance';
import Record from './pages/Record';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/balance" component={Balance} />
            <Route path="/record" component={Record} />
          </div>
        </Router>
        
      </Provider>
    );
  }
}

export default App;