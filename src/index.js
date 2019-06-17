import React from 'react';
import ReactDOM from 'react-dom';

require('./style.css');

class App extends React.Component {
  render() {
    const { name } = this.props;
    return <>Hello {name}</>;
  }
}
const mountNode = document.getElementById('app');
ReactDOM.render(<App name="Aaron" />, mountNode);
