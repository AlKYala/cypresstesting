// src/components/Cart.tsx
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Summary from './Summary';
import { useCartStore } from '../store/store';

const Cart = () => {
  const { cart } = useCartStore();
  const navigate = useNavigate();

  const handleProceed = () => {
    if (cart.length > 0) {
      navigate('/payment');
    }
  };

  return (
    <div>
      <h2>Cart Page</h2>
      {cart.length === 0 ? 'Your cart is empty' : cart.map((item, index) => <Summary key={index} item={item} />)}
      <Button disabled={cart.length === 0} onClick={handleProceed}>Proceed to Payment</Button>
    </div>
  );
}

export default Cart;