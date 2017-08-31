import React from 'react';

// import ListItem from '../components/ListItem';

const todoList = ['Invitar a Bert a cenar', 'Dormir', 'Patinar', 'Llorar'];

class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {todoList.map( (task, index) => <li key={index}>{task}</li>)}
        </ul>
      </div>
    );
  }
}

export default List;
