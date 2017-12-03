import React, { Component } from 'react';
class CheckList extends Component {
  state = {  }
  render() {
    let tasks = this.props.tasks.map((task) => (
      <li className = "checklist__task" key = {task.id}>
        <input type="checkbox" name="" id="" defaultChecked = {task.done}/>
        {task.name}
        <a className="checklist__task--remove"></a>
      </li>
    ))
    return (
      <div className="checklist">
        <ul>{tasks}</ul>
      </div>
    );
  }
}

export default CheckList;