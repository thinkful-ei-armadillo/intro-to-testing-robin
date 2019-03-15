import React from 'react';
import Card from './Card';
import './List.css';
import STORE from './store';

function List(props){
  console.log(props)
  // console.log(props.card.id)
  // console.log(Object.keys(STORE.allCards));
  
  return(
    <div className="List">
      <header>
      {props.header}
      </header>

      <div>
        {props.card.map(card =>
          <Card 
            key={card.id}
            id={card.id} 
            title={card.title} 
            content={card.content} 
            onDeleteClick={props.onDeleteClick}
            />
          )}
          <button onClick={() => props.onRandomClick(props.id)}>Random Generator</button>
      </div>
    </div>
  );
}


export default List;
