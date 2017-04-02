import React, { Component } from 'react';

class ItemInput extends Component {
  render() {
    return (
      <div>
        <input ref='taskInput' type='text' />
        <button onClick={() => {
          const inputValue = this.refs.taskInput.value;
          this.props.createTask(inputValue)
        }}>Agregar</button>
      </div>
    );
  }
}

 export default ItemInput;
