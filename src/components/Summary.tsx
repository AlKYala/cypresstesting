// src/components/Summary.tsx
import { useState } from 'react';
import { Card, CardContent, CardMedia, Button } from '@material-ui/core';
import Product from './Product';
import { IProduct } from '../models/IProduct';
import { useCartStore } from '../store/store';

interface SummaryProps {
  item: IProduct;
}

const Summary = ({ item }: SummaryProps) => {
  const { removeProduct } = useCartStore();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleRemove = () => {
    removeProduct(item.name);
  };

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const newQuantity = e.target.value as number;
    setQuantity(newQuantity);
    item.quantity = newQuantity;
  };

  return (
    <Card>
      <CardMedia image="/product.jpg" title={item.name} style={{ height: '128px', width: '128px' }} />
      <CardContent>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <select value={quantity} onChange={handleChange}>
          {[...Array(11)].map((_, i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
        <Button onClick={handleRemove}>Delete</Button>
      </CardContent>
    </Card>
  );
}

export default Summary;