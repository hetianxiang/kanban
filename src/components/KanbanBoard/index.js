import React, { Component } from 'react';
import List from './List';
class KanbanBoard extends Component {
  state = { }
  render () {
    console.log(this.props.cards)
    return (
      <div className="app">
         <List id = 'todo' title = 'to do' cards = {
          this.props.cards.filter((card) => card.status === "todo")
        }/>
        
        <List id = 'todo' title = 'in Progress' cards = {
          this.props.cards.filter((card) => card.status === "in-progress")
        }/>

        <List id = 'todo' title = 'done' cards = {
          this.props.cards.filter((card) => card.status === "done")
        }/>
      </div>
    )
  }
}
export default KanbanBoard;