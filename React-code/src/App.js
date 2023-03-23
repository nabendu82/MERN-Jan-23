import React from 'react';
import './App.css'
import Card from './components/card';
import Lodding from './components/lodding';

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      monster:[]
    }
   
  }

  //lifecylce - componnetDidMount
 componentDidMount(){
  console.log('3')
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data=>this.setState(
   ()=>{return {monster:data}},
   ()=>{console.log('state seted ')}
   ))
  
 }




  render(){
     const {monster}=this.state
    return(
       <div> 
        <h1 className='app-title '>Monster-Dox</h1>
      {
        monster.length === 0 ?
        <Lodding />
         
        :
    
    // this.state.monster.map((item) => <h1 key={item.name}>{item.name}</h1>
    //   )
   <Card  monsterItem = {monster} />
   
   }

    </div>
  )}
}

export default App;


//state- after api 