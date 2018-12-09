import React, { Component } from 'react';
import Cell1 from './components/Cell1';
import Cell2 from './components/Cell2';
import Cell3 from './components/Cell3';
import Cell4 from './components/Cell4';
import Cell5 from './components/Cell5';
import Cell6 from './components/Cell6';
import Cell7 from './components/Cell7';
import Cell8 from './components/Cell8';
import Cell9 from './components/Cell9';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Cell1 />
          <Cell2 />
          <Cell3 />
          <Cell4 />
          <Cell5 />
          <Cell6 />
          <Cell7 />
          <Cell8 />
          <Cell9 />
        </div>
      </div>
    );
  }
}

export default App;
