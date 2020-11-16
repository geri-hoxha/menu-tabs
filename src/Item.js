import React from 'react';
import './App.css';


const Item=(props)=>{

  
    return (
      <div className='one-item' >
        <div className='cart-header'> 
        <h3>{props.name}</h3>
        <span>{props.price}$</span>
        </div>
        <p className='cart-body'>{props.desc}</p>
      </div>
    );
    
  }
  
  export default Item;
  