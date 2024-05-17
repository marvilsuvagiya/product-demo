import React from 'react';
import './App.css';
import Product from './features/products/Product';

function Store() {

  return (
   <div className='Product'>
    <header className='Store-header'>
      <Product />
    </header>
   </div>
  );

}

export default Store;
