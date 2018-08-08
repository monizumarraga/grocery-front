import React from 'react';
import './Card.css';

const Card = ({ id, name, brand_name, gtin14, images }) => {
  return (
    <div className="backSquare">
      <h1 className="CardTitle">{name}</h1>
      <div>
        <img style= {{margin:'10px', padding: '10px', backgroundColor:'white', height:'70px', width:'auto'}}
              alt='noImage' 
              src=''/>
        <div>
          <h2 className="CardDescription">{brand_name}</h2>
          <p className="CardCode">{gtin14}</p>
        </div>               
      </div>      
    </div>
  );
}

export default Card;
