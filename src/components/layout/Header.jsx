import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = ({ title = "Gestion de clientes - Reparacion de celulares", onAddClick }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {onAddClick && (
          <Button color="inherit" onClick={onAddClick}>
            + Agregar
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
