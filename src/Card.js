import React from 'react';
import './Card.css';
import './List.js';

function Card(props){

  return(
    <div className='Card'>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button type="button" onClick={() => props.onDeleteClick(props.id)}>Delete</button>
    </div>
  );
}

export default Card;
