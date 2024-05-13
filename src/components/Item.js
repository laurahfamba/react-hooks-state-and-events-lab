
import React, { useState } from 'react';

function Item({ name }) {
  const [inCart, setInCart] = useState(false);

  const handleToggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? 'in-cart' : ''}>
      {name}
      <button onClick={handleToggleCart}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;