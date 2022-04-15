import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
 
 const {img,name,seller,price,ratings}=props.product;
//  const {handleAddToCart}=props.handleAddToCart;

  return (
    <div className='product'>
      <img src={img} alt="" />
     <div className="product-info">
        <p className='product-name'>{name}</p>
        <p className='product-price'>Price:${price}</p>
        <p className='small-tags'><small> Manufacture:{seller}</small> </p>
        <p  className='small-tags'> <small>Ratings:{ratings}</small> </p>
     </div>
     
     <button onClick={()=>props.handleAddToCart(props.product)} className='cart-btn' >
       <p>Add To Cart</p>
       <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
       
       </button>
     
     
     
    </div>
  
  );
};

export default Product;