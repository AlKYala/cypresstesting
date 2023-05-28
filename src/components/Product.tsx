// src/components/Product.tsx
import { useState } from 'react';
import { Button, Snackbar } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/store';

const Product = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const { addProduct } = useCartStore();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct({ name, description, quantity });
    setOpen(true);
  };

  const handleCart = () => {
    navigate('/cart');
  };

  return (
    <div>
      <h2>Product Page</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <input type="number" min="0" max="10" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
        <Button type="submit">Add to Cart</Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} message="Item added to cart" />
      <Button onClick={handleCart}>View Cart</Button>
    </div>
  );
}

export default Product;