// src/App.tsx
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import Product from './components/Product';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const App = () => {


  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={ () => window.location.replace('/')}>
            <ShoppingCartIcon />
          </IconButton>
          <Typography variant="h6">
            E-commerce
          </Typography>
          <Button color="inherit"><ShoppingCartIcon /></Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/confirmation" element={<Confirmation />}/>
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<Payment />} />
        <Route path="/" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;