const { render } = require('react-dom');
const React = require('react');
const { Provider } = require('react-redux');
const { createStore } = require('redux')


const Counter = require('./Counter.jsx');

const counterApp = require('../reducers/index.js')

const store = createStore(counterApp, window.devToolsExtension ? window.devToolsExtension() : undefined);

class Main extends React.Component {
  render() {
    return <Counter />
  }
}

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
