import React, { Component } from 'react';

class ToDoItem extends Component {
  render () {
    return (
      <div>
        <hr/>
        <input type="checkbox" />
        <label>Contenido de la tarea</label>
        <button onClick={this.deleteTask}>Borrar</button>
      </div>
    );
  }

  deleteTask = () => {
    alert('se borra tarea');
  }
}

export default ToDoItem;
