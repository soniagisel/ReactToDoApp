import React, { Component } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';

class ItemList extends Component {

  render () {
    const toDoList = this.props.toDoList;
    return (
      <div>
        <h1>List of ToDos</h1>
        {toDoList.map((todo, index) => (
          <ToDoItem
            key={index}
            id={index}
            deleteTask={this.props.toDelete}>
              {todo.task}
            </ToDoItem>))}
      </div>
    );
  }
}
 export default ItemList;
