// src/components/Confirmation.tsx
import { useCartStore } from '../store/store';
import Summary from './Summary';

const Confirmation = () => {
  const { cart } = useCartStore();

  return (
    <div>
      <h2>Order Successful</h2>
      {cart.map((item, index) => <Summary key={index} item={item} />)}
    </div>
  );
}

export default Confirmation;