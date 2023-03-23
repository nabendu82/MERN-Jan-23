import React from "react";


function Card(props){
    const {name, email} = props.monster
    return(
        <div className="card-container">
         <h1>{name}</h1>
         <p>{email}</p>    
        </div>
    )
}

export default Card;