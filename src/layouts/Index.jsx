import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];
const Voting = React.createClass({
  render() {
    return <div> React component </div>
  }
})
ReactDOM.render(
  <Voting pair={pair} />,
  document.getElementById('app')
);
