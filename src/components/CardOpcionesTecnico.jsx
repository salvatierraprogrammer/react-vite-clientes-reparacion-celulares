import React from 'react';
import {
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BuildIcon from '@mui/icons-material/Build';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import MemoryIcon from '@mui/icons-material/Memory';
import Inventory2Icon from '@mui/icons-material/Inventory2';

export default function CardOpcionesTecnico({ onAction }) {
  const acciones = [
    { label: 'Inicio', key: 'Home', icon: <HomeIcon /> },
    { label: 'Clientes', key: 'Clientes', icon: <PeopleIcon /> },
    { label: 'Proveedores', key: 'Proveedores', icon: <LocalShippingIcon /> },
    { label: 'Abrir Celular', key: 'abrir', icon: <OpenInBrowserIcon /> },
    { label: 'Diagnóstico', key: 'diagnostico', icon: <EngineeringIcon /> },
    { label: 'Soldar Componente', key: 'soldar', icon: <BuildIcon /> },
    { label: 'Cambiar Módulo', key: 'cambiarModulo', icon: <SyncAltIcon /> },
    { label: 'Software', key: 'software', icon: <MemoryIcon /> },
    { label: 'Caja / Embalaje', key: 'caja', icon: <Inventory2Icon /> },
  ];

  return (
    <Card
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: 3,
        boxShadow: 6,
        p: 2,
        maxWidth: 400,
        margin: '0 auto',
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            mb: 3,
            color: 'primary.main',
            letterSpacing: 1,
          }}
        >
          Opciones del Técnico
        </Typography>

        <Grid container spacing={2}>
          {acciones.map(({ key, label, icon }) => (
            <Grid item xs={12} sm={6} key={key}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={icon}
                fullWidth
                onClick={() => onAction(key)}
                sx={{
                  borderRadius: 2,
                  fontWeight: 600,
                  py: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'white',
                    boxShadow: 3,
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
