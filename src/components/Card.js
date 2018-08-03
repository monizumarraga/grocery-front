import React, { Component } from 'react';
import './Card.css';

const Card = ({ id, product, description, code }) => {
  return (
    <div className="backSquare">
      <h1 className="CardTitle">{product}</h1>
      <div>
        <img alt='product' src=''/>
        <div>
          <h2 className="CardDescription">{description}</h2>
          <p className="CardCode">{code}</p>
        </div>               
      </div>      
    </div>
  );
}

export default Card;
