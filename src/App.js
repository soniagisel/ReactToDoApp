import React, { Component } from 'react';
import ItemInput from './components/ItemInput/ItemInput';
import ItemList from './components/ItemList/ItemList';
import Counters from './components/Counters/Counters';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Mi lista de tareas</h1>
        <Counters />
        <ItemInput />
        <ItemList />
      </div>
    );
  }
}

export default App;
