import React, {Component} from 'react';
import './App.css';
import List from './List';
import STORE from './store';

function omit(obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
          key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
    );
  }

  function newRandomCard () {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

class App extends Component {

  // add store to a new state storage here so that all details can be passed down to children
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };

  state = {
    STORE
  };

  // handle delete button click function  
  // button event handlers should be methods, and use setState({})
  // each list and each card should be selected by using their id
  // from instructions - how to remove key value pairs from an object
  

  handleDeleteClick = (idOfCard) => {
    console.log('deleting....')

    // console.log(this.state.lists[0].cardIds);
    
    const { lists, allCards } = this.state.STORE;

    // take cardId and use it to filter out cards in lists that DONT have that id

    const reRenderList = lists.map( list => {
      list.cardIds = list.cardIds.filter( id => id !== idOfCard );
     return list;
    })
    // allCards[idOfCard].remove();
    // const newObj = omit(allCards[idOfCard], idOfCard);
    // console.log(newObj);
    this.setState({
      lists: reRenderList
    })

  }
  handleRandomClick =(idOfList) =>{
     const newCard = newRandomCard();
    
     const reRenderList = this.state.STORE.lists.map(list => {
       if(list.id === idOfList){
         list.cardIds.push(newCard.id);
       }return list;
     })

     this.setState({
       STORE: {
         lists: reRenderList,
         allCards: {...this.state.STORE.allCards, [newCard.id]: newCard
         }
       }
     })

  }  
  // handle random card button click function
  // must add new card to both allCards object as well as insert the id into lists.cardIds
  // from assignment instructions


  render() {
    console.log(this.state);
    // const {store} = this.state;
    // const {store} = this.props;
      return(
        <main>
          <header>
            <h1>Trello</h1>
          </header>
          <div className='App-list'>
            {this.state.STORE.lists.map(list =>(
              <List
                  key = {list.id}
                  id = {list.id}
                  header = {list.header}
                  card = {list.cardIds.map(id => ({...this.state.STORE.allCards[id], id}))}
                  onDeleteClick = {this.handleDeleteClick}
                  onRandomClick = {this.handleRandomClick}
              />))} 
          </div>
        </main>
  );
  }
}

export default App;