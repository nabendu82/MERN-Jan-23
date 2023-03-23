import React from 'react';
import Cardd from './card-list';

class Card extends React.Component{

    render(){

     const {monsterItem}=this.props
    //    console.log(monsterItem)
        return (
            <div className="card-list" >
                
             {
                monsterItem.map((monster)=>{
                  return  <Cardd monster={monster} />
                })
             }
            </div>
        )
    }
}

export default Card;