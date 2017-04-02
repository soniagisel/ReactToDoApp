import React, { Component } from 'react';
//import ToDoItem from '../ToDoItem/ToDoItem';

class ItemList extends Component {

  render () {
    const toDoList = this.props.toDoList;
    return (
      <div>
        <h1>List of ToDos</h1>
        {toDoList.map(todo => (<p key={todo.id}>{todo.task}</p>))}
      </div>
    );
  }
}
 export default ItemList;
