import React from "react"


class Cardd extends React.Component{
 
    render(){
        const {monster}=this.props;
         console.log(monster)
        return(
            <div className="card-container">
            <h1>{monster.name}</h1>
            <p>{monster.email}</p>
            </div>
        )
    }
}

export default Cardd;
