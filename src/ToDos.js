import React, { Component } from 'react';
//import ItemInput from './components/ItemInput/ItemInput';
import ItemList from './components/ItemList/ItemList';
//import Counters from './components/Counters/Counters';


class ToDos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [
        { id: 0, task: 'Planchar', checked: false },
        { id: 1, task: 'Cocinar', checked: false }
      ]
    };
  }
  CreateItem()  {

  }

  deleteToDo(index) {

  }

  checkedItem(index, value) {

  }

  render() {
    return (
      <div>
        <h1>Mi lista de tareas</h1>
        <ItemList toDoList={this.state.toDos} />
      </div>
    );
  }
}

export default ToDos;
