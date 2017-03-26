import React, { Component } from 'react';

class ToDoItem extends Component {
  render () {
    return (
      <div>
        <label>Nombre de la tarea</label>
        <p>Contenido de la tarea.</p>
        <input type="checkbox" />
        <button>Borrar</button>
      </div>
    );
  }
}

export default ToDoItem;
