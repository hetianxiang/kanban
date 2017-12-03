import React, { Component } from 'react';
import './App.css';
import KanbanBorad from './components/KanbanBoard/index';

let cardList = [
  {
    id: 1,
    title:"Read the Book",
    description: "I should read the whole book",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title:"Write some code",
    description: "Code along with the sample in the book",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <KanbanBorad cards = {cardList} />
      </div>
    );
  }
}

export default App;
