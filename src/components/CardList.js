import React, { Component } from 'react';
import './CardList.css';
import Card from './Card';

const CardList = ({ products }) => {
  
  return (
    <div className="CardContainer">
    {
      products.map(( product, i) => {
      return (
        <Card 
          key={i}
          id={product.id}
          product={product.product}
          description={product.description}
          code={product.code}
          />
        )
      })
    }
    </div>
  );
}

export default CardList;
