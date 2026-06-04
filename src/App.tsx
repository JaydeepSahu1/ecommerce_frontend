import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AddShoppingCart } from '@mui/icons-material';
import Navbar from './Customer/Components/Navbar';
import customTheme from './Theme/CustomTheme';

function App() {
  return (


    <ThemeProvider theme={customTheme}>

      <div>
        <Navbar />
      </div>

    </ThemeProvider>

  );
}

export default App;
