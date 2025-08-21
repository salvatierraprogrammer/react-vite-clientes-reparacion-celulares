import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ title = "Gestión de clientes - Reparación de celulares", onMenuClick, onAddClick }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {onMenuClick && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
        )}
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
