import React, { Component } from 'react';
import List from './List';


import TodoForm from './TodoForm';


const List = (props) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      { props.items.map( item => <li key={item.id}>{item.name}</li>) }
    </ul>
  </div>
)


export default List