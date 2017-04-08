import React, { Component } from 'react';
import ItemInput from './components/ItemInput/ItemInput';
import ItemList from './components/ItemList/ItemList';
//import Counters from './components/Counters/Counters';

class ToDos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: []
    };
  }
  _createTask(task)  {
    this.setState({
      toDos: [...this.state.toDos, { task, checked: false }]
    })
  }

  _deleteToDo(index) {
    const state = { ...this.state };
    const array = state.toDos;
    array.splice(index, 1);
    this.setState({
      toDos: array
    })
  }

  _checkedItem(index, value) {

  }

  render() {
    return (
      <div>
        <h1>Mi lista de tareas</h1>
        <ItemInput createTask={(task) => this._createTask(task)}/>
        <ItemList toDoList={this.state.toDos} toDelete={(index) => this._deleteToDo(index)} />
      </div>
    );
  }
}

export default ToDos;
