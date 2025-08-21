// Clientes.jsx
import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  IconButton,
  CircularProgress,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';
import { fetchClientes, deleteCliente } from '../service/ecApi';

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadClientes = async () => {
    setLoading(true);
    try {
      const data = await fetchClientes();
      setClientes(data);
    } catch (error) {
      console.error('Error cargando clientes:', error);
      alert('Error cargando clientes');
    }
    setLoading(false);
  };

  useEffect(() => {
    loadClientes();
  }, []);

  const handleAgregarCliente = () => {
    alert('Aquí se abriría el modal para crear un nuevo cliente');
  };

  const handleVer = (cliente) => alert(`Ver detalles de ${cliente.nombre}`);
  const handleEditar = (cliente) => alert(`Editar ${cliente.nombre}`);
  const handleEliminar = async (cliente) => {
    if (!window.confirm(`¿Eliminar cliente ${cliente.nombre}?`)) return;
    try {
      await deleteCliente(cliente.id);
      await loadClientes();
    } catch (error) {
      console.error('Error eliminando cliente:', error);
      alert('Error al eliminar cliente');
    }
  };

  const iconMap = {
    Fecha: <CalendarTodayIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
    Marca: <PhoneIphoneIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
    Modelo: <BuildIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
    Problema: <InfoIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
    Estado: <InfoIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, color: '#00f5cc', fontWeight: 700 }}>
        Clientes
      </Typography>

      <Button
        startIcon={<AddIcon />}
        variant="contained"
        sx={{
          mb: 3,
          backgroundColor: '#00f5cc',
          color: '#000',
          '&:hover': { backgroundColor: '#1affd5' },
        }}
        onClick={handleAgregarCliente}
      >
        Crear Nuevo
      </Button>

      {loading ? (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <CircularProgress />
          <Typography>Cargando clientes...</Typography>
        </div>
      ) : clientes.length === 0 ? (
        <Typography sx={{ mt: 3 }}>No hay clientes para mostrar.</Typography>
      ) : (
        <Grid container spacing={3}>
          {clientes.map((cliente) => (
            <Grid item xs={12} sm={6} md={4} key={cliente.id}>
              <Card
                sx={{
                  backgroundColor: '#001f1f',
                  border: '1px solid #00f5cc',
                  borderRadius: 2,
                  boxShadow: '0 0 10px #00f5cc55',
                  color: '#00f5cc',
                  position: 'relative',
                  height: '100%',
                }}
              >
                <IconButton
                  onClick={() => handleEliminar(cliente)}
                  size="small"
                  sx={{ position: 'absolute', top: 8, right: 8, color: '#f44336' }}
                >
                  <DeleteIcon />
                </IconButton>

                <CardContent sx={{ paddingRight: '48px' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {cliente.nombre}
                  </Typography>
                  {[
                    ['Fecha', cliente.fechaHora],
                    ['Marca', cliente.marca],
                    ['Modelo', cliente.modelo],
                    ['Problema', cliente.problema],
                    ['Estado', cliente.estado],
                  ].map(([label, val]) => (
                    <Typography key={label} variant="body2" sx={{ mb: 0.5 }}>
                      <strong>{iconMap[label]} {label}:</strong> {val}
                    </Typography>
                  ))}
                </CardContent>

                <CardActions sx={{ px: 2, pb: 2, gap: 1 }}>
                  <Button
                    startIcon={<VisibilityIcon />}
                    size="small"
                    variant="contained"
                    onClick={() => handleVer(cliente)}
                    sx={{ backgroundColor: '#00f5cc', color: '#000', '&:hover': { backgroundColor: '#1affd5' } }}
                  >
                    Ver
                  </Button>
                  <Button
                    startIcon={<EditIcon />}
                    size="small"
                    variant="contained"
                    onClick={() => handleEditar(cliente)}
                    sx={{ backgroundColor: '#00f5cc', color: '#000', '&:hover': { backgroundColor: '#1affd5' } }}
                  >
                    Editar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
