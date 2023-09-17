
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from './Home';
import Assistant from './Assistant';
import Customization from './Customization';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/assistant" component={Assistant} />
          <Route path="/customization" component={Customization} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
