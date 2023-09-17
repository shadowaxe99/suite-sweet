
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store, { persistor } from '../redux/store';
import Home from './Home';
import Assistant from './Assistant';
import Customization from './Customization';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/assistant" component={Assistant} />
            <Route path="/customization" component={Customization} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
