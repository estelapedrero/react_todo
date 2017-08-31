import React from 'react';
import ListItem from '../ListItem';

const todoList = [
  {title: 'Invitar a Bert a cenar', done: true},
  {title: 'Dormir', done: true},
  {title: 'Patinar', done: false},
  {title: 'Llorar', done: false}
];

class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {todoList.map( (task, index) => <ListItem key={index} title={task.title} done={task.done}/>)}
        </ul>
      </div>
    );
  }
}

export default List;
