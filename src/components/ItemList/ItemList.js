import React, { Component } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';

class ItemList extends Component {
  render () {
    return (
      <div>
        <h2>Lista de Tareas</h2>
        <ToDoItem />
      </div>
    );
  }
}
 export default ItemList;
