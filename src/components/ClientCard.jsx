import React, { useState } from 'react';
import {
  Card, CardContent, CardActions,
  Typography, Button, Grid, Select, MenuItem, IconButton
} from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';

// Opciones agrupadas
const reparaciones = [
  { label: 'Batería y energía', items: ['cambiar batería', 'reparar conector de carga', 'soldar pin de carga'] },
  { label: 'Audio y sensores', items: ['soldar micrófono', 'cambiar altavoz', 'cambiar auricular'] },
  { label: 'Pantalla y táctil', items: ['cambio de modulo', 'cambio de pantalla', 'reparar pantalla táctil', 'reemplazar cristal'] },
  { label: 'Software', items: ['diagnóstico técnico', 'formateo y reinstalación', 'recuperar datos'] },
  { label: 'Soldadura y hardware', items: ['uso estación de soldado', 'soldadura de piezas', 'reparar placa madre'] },
  { label: 'Otros', items: ['desamble', 'limpieza interna', 'tratamiento de equipos mojados'] },
];

const ReparacionesSelect = ({ modelo }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const selected = e.target.value;
    setValue('');
    if (!selected) return;
    const query = encodeURIComponent(`${modelo} ${selected}`);

    window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
  };

  return (
    <Select
      size="small"
      displayEmpty
      value={value}
      onChange={handleChange}
      sx={{
        minWidth: 160,
        bgcolor: '#000',
        border: '1px solid #00f5cc',
        color: '#00f5cc',
        '& svg': { color: '#00f5cc' }
      }}
    >
      <MenuItem value="">🔍 Reparaciones</MenuItem>
      {reparaciones.flatMap(group => [
        <MenuItem disabled key={`${group.label}-header`} sx={{ fontWeight: 'bold' }}>
          {group.label}
        </MenuItem>,
        ...group.items.map(item => (
          <MenuItem key={item} value={item}>{item}</MenuItem>
        ))
      ])}
    </Select>
  );
};

export default function ClientCard({ client, onView, onEdit, onDelete }) {
  const { nombre, modelo, ...info } = client;

  // Para asociar iconos a cada campo
  const iconMap = {
    Fecha: <CalendarTodayIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
    Marca: <PhoneIphoneIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
    Modelo: <BuildIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
    Problema: <InfoIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
    Estado: <InfoIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
  };

  const campos = [
    ['Fecha', info.fechaHora],
    ['Marca', info.marca],
    ['Modelo', modelo],
    ['Problema', info.problema],
    ['Estado', info.estado],
  ];

  return (
    <Grid item xs={12} sm={6} md={4}>
      
      <Card sx={{
        backgroundColor: '#001f1f',
        border: '1px solid #00f5cc',
        borderRadius: 2,
        boxShadow: '0 0 10px #00f5cc55',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        color: '#00f5cc'
      }}>
        
        <IconButton
          onClick={onDelete}
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: '#f44336'
          }}
          aria-label="eliminar"
        >
          <DeleteIcon />
        </IconButton>
          
        <CardContent sx={{ flexGrow: 1, paddingRight: '48px' }}>
          
          <Typography variant="h6" sx={{ color: '#00f5cc', fontWeight: 700 }} gutterBottom>
            {nombre}
          </Typography>
          {campos.map(([label, val]) => (
            <Typography key={label} variant="body2" sx={{ marginBottom: 0.5 }}>
              <strong>{iconMap[label]} {label}:</strong> {val}
            </Typography>
          ))}
        </CardContent>
          
        <CardActions sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          px: 2,
          pb: 2,
          gap: 1,
        }}>
          <div>
            <Button
              startIcon={<VisibilityIcon />}
              size="small"
              variant="contained"
              onClick={onView}
              sx={{
                mr: 1,
                backgroundColor: '#00f5cc',
                color: '#000',
                '&:hover': { backgroundColor: '#1affd5' }
              }}
            >
              Ver
            </Button>
            <Button
              startIcon={<EditIcon />}
              size="small"
              variant="contained"
              onClick={onEdit}
              sx={{
                backgroundColor: '#00f5cc',
                color: '#000',
                '&:hover': { backgroundColor: '#1affd5' }
              }}
            >
              Editar
            </Button>
           
          </div>

          
        </CardActions>
          <ReparacionesSelect modelo={modelo} />
      </Card>
    </Grid>
  );
}
