import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviweItem from '../ReviweItem/ReviweItem';

const Orders = () => {
  const [products,setProducts]=useProducts();
  const [cart,setCart]=useCart(products);
  const deleteItem =(product)=>{
    const rest =cart.filter(pd=>pd.id !==
       product.id);
    setCart(rest);
    removeFromDb(product.id);

  }
  return (
    <div className="shop">
      <div className="reviwe-container">
        {cart.map((product) => (
          <ReviweItem
            key={product.id}
            product={product}
            deleteItem={deleteItem}
          ></ReviweItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/inventory">
          <button>Check out</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;