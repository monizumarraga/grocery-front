import React, { Component } from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, SearchChange }) => {
  return (
    <div className="Search">
      <input 
        className="SearchBox"
        type='search' 
        placeholder='search product'
        onChange={SearchChange}
        />
    </div>
  );
}

export default SearchBox;
