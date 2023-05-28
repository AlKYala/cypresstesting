// src/components/Payment.tsx
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Summary from './Summary';
import { useCartStore } from '../store/store';

const Payment = () => {
  const { cart } = useCartStore();
  const navigate = useNavigate();

  const handlePay = () => {
    navigate('/confirmation');
  };

  return (
    <div>
      <h2>Payment Page</h2>
      {cart.map((item, index) => <Summary key={index} item={item} />)}
      <Button onClick={handlePay}>Pay</Button>
    </div>
  );
}

export default Payment;