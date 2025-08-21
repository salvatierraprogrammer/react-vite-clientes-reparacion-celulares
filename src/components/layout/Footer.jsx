import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 2, 
        mt: 4, 
        bgcolor: 'grey.900',  // color oscuro de fondo
        color: 'white', 
        textAlign: 'center',
        position: 'relative'  // mantiene el footer en su lugar
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2">
          © {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
