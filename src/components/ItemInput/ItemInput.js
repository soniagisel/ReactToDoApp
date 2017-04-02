import React, { Component } from 'react';

class ItemInput extends Component {
  render() {
    return (
      <div>
        <input type='text'></input>
        <button onClick={this.addTask}>Agregar</button>
      </div>
    );
  }

  addTask = () => {
    alert('se agrega tarea');
  }
}

 export default ItemInput;
