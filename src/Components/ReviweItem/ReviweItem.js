import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviweItem.css';

const ReviweItem = (props) => {
  console.log(props);
  const {product,deleteItem}=props;
  const { id, name, price, shipping, quantity, img} = product;
  return (
    <div className="reviwe-item-container">
      <div className="reviwe-item-img">
        <img src={img} alt="" />
      </div>
      <div className="reviwe-item">
        <div className="item-info">
          <h2 title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </h2>
          <p>
            Price:<span>${price}</span>
          </p>
          <p>
            Shipping Charge:<span> ${shipping}</span>{" "}
          </p>
        </div>

        <div className="reviwe-delete-item">
          <button onClick={() =>deleteItem(product)}>
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviweItem;