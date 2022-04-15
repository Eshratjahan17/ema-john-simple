import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
 const [products, setProducts] = useProducts();
 
  const [cart,setCart]=useState([]);
  const handleAddToCart = (product) => {
    
    const newCart=[...cart,product];
    setCart(newCart);
    addToDb(product.id);
  }
useEffect(()=>{
  const storedCart=getStoredCart();
  for (const id in storedCart ){
    const addedProduct =products.find(product => product.id === id);
    console.log(addedProduct);
  }
},[])

  return (
    <div className='shop'>
      <div className="products-container">
          {
            products.map(product => <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            ></Product>)
            }
      </div>
      <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/orders"><button>Reviwe Order</button></Link>
          </Cart>
      </div>
    </div>
  );
};

export default Shop;