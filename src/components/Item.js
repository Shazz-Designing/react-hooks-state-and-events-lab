import React, { useState } from 'react';

function Item({ name, category }) {

  //Add state to track whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  //Create an event handler to toggle the item's cart status
  const toggleCartStatus = () => {
    setIsInCart(!isInCart);
  };

  //Update the className based on whether the item is in the cart
  const itemClass = isInCart ? 'in-cart' : '';

  //Update the text of the <button> element accordingly
  const buttonText = isInCart ? 'Remove From Cart' : 'Add to Cart';

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartStatus}>Add to Cart</button>
    </li>
  );
}

export default Item;
