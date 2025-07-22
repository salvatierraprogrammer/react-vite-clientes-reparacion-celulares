import React from 'react';
import { Grid, Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const proveedores = [
  { nombre: "Sara Cell", url: "https://www.google.com/search?q=Sara+Cell" },
  { nombre: "Técnico Cerca", url: "https://tienda.tecnicocerca.com/pais/1/sucursal/26/home" },
  { nombre: "El Celu", url: "https://www.elcelu.com.ar/" }
];

export default function ProviderList() {
  return (
    <Grid container spacing={3}>
      {proveedores.map((prov, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Card
            sx={{
              backgroundColor: '#001f1f',
              border: '1px solid #00f5cc',
              boxShadow: '0 0 10px #00f5cc55',
              borderRadius: 2,
              color: '#00f5cc'
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#00f5cc' }}>
                {prov.nombre}
              </Typography>
              <Typography variant="body2">
                Proveedor confiable para reparaciones y repuestos.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                onClick={() => window.open(prov.url, '_blank')}
                sx={{
                  backgroundColor: '#00f5cc',
                  color: '#000',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#1affd5'
                  }
                }}
              >
                Visitar sitio
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
