import React from 'react';
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
          brand_name={product.brand_name}
          name={product.name}
          gtin14={product.gtin14}
          images={product.images}
          />
        )
      })
    }
    </div>
  );
}

export default CardList;
