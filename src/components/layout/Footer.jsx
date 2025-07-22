import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 2, 
        mt: 4, 
        bgcolor: 'primary.main', 
        color: 'white', 
        textAlign: 'center' 
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
