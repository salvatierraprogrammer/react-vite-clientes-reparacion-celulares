import React, { useEffect, useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, MenuItem
} from '@mui/material';

export default function EditClientModal({ open, onClose, client, onSave }) {
  const [form, setForm] = useState({});

useEffect(() => {
  if (client) {
    setForm({
      id: String(client.id ?? ''), // 🔧 Forzar a string
      nombre: client.nombre ?? '',
      marca: client.marca ?? '',
      modelo: client.modelo ?? '',
      telefono: client.telefono ?? '',
      problema: client.problema ?? '',
      senia: client.sena ?? 0,
      presupuesto: client.presupuesto ?? 0,
      estado: client.estado ?? 'pendiente'
    });
  }
}, [client]);


  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const cleaned = {
      ...form,
      sena: Number(form.sena || 0),
      presupuesto: Number(form.presupuesto || 0),
      telefono: String(form.telefono ?? ''),
    };

    if (!cleaned.id) {
      alert("Falta el ID del cliente.");
      return;
    }

    onSave(cleaned); // ✅ Se pasa un solo objeto, incluyendo el ID
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Editar cliente</DialogTitle>
      <DialogContent sx={{ display: 'grid', gap: 2 }}>
        {['nombre', 'marca', 'modelo', 'telefono', 'problema', 'Seña', 'presupuesto'].map(field => (
          <TextField
            key={field}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            name={field}
            type={field === 'Seña' || field === 'presupuesto' ? 'number' : 'text'}
            value={form[field] || ''}
            onChange={handleChange}
            fullWidth
            required={field !== 'Seña'}
          />
        ))}
        <TextField
          select
          label="Estado"
          name="estado"
          value={form.estado || ''}
          onChange={handleChange}
        >
          {['pendiente', 'en proceso', 'completado'].map(opt => (
            <MenuItem key={opt} value={opt}>{opt}</MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} variant="contained">Guardar cambios</Button>
        <Button onClick={onClose}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  );
}
