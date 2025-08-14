import React from 'react';
import { Card, CardContent, Grid, Button, Typography } from '@mui/material';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BuildIcon from '@mui/icons-material/Build';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import MemoryIcon from '@mui/icons-material/Memory';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function CardOpcionesTecnico({ onAction }) {
  const acciones = [
    { label: "Proveedores", key: "Proveedores", icon: <LocalShippingIcon /> },
    { label: "Abrir Celular", key: "abrir", icon: <OpenInBrowserIcon /> },
    { label: "Diagnóstico", key: "diagnostico", icon: <EngineeringIcon /> },
    { label: "Soldar Componente", key: "soldar", icon: <BuildIcon /> },
    { label: "Cambiar Módulo", key: "cambiarModulo", icon: <SyncAltIcon /> },
    { label: "Software", key: "software", icon: <MemoryIcon /> },
    { label: "Caja / Embalaje", key: "caja", icon: <Inventory2Icon /> },
  ];

  return (
    <Card sx={{ p: 2, mb: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Opciones para el técnico
        </Typography>
        <Grid container spacing={2}>
          {acciones.map(acc => (
            <Grid item xs={12} sm={6} md={4} key={acc.key}>
              <Button
                variant="contained"
                color="primary"  // todos con el mismo color
                startIcon={acc.icon}
                fullWidth
                onClick={() => onAction(acc.key)}
              >
                {acc.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
