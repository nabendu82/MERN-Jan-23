import React ,{useEffect, useState}from "react";
import Card from "./fComponents/card1";
import Load from "./fComponents/loddingf";

import './App.css'

const App =()=>{
  const [monster,setMonster]=useState([])
//   console.log(1)


//   function clickEvent(){
//     return setCount(count +1)
//   }

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setMonster(data))
    
  },[])

    return(

       <>
       {
         monster.length === 0 ?

         <Load /> :

         monster.map((monster)=>{
            // const {name,email}= monster

            return <Card key={monster.id} monster={monster} />
         })

        //  console.log(monster)

        //  <Card  />

       }
       </>
        
        
    )
}


export default App;


//useEffect - it start to run multiple times



//  const obj = {

//  }