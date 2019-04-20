import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h2>Jordy's Place</h2>
        <div>{moment().add(4, 'days').calendar()}</div>
      </div>
    );
  }
}
