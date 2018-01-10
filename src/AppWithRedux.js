import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { UsersWithRedux } from './containers';

const store = configureStore();

class AppWithRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

const App = () => {
  return (
    <div className="container">
      <UsersWithRedux />
    </div>
  );
}

export default AppWithRedux;
