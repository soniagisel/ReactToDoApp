import React, { Component } from 'react';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDelete: false,
      checked: false
    }
  }
  render () {
    return (
      <div>
        <hr/>
        <input type="checkbox" />
        <label>Contenido de la tarea</label>
        <button onClick={ () => {
            const itemIndex = this.props.id;
            this.props.deleteTask(itemIndex)}}>
            Borrar
          </button>
      </div>
    );
  }
}

export default ToDoItem;
