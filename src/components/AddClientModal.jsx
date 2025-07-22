import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, MenuItem
} from '@mui/material';

export default function AddClientModal({ open, onClose, onSave }) {
  const [form, setForm] = useState({
    nombre: '', marca: '', modelo: '', telefono: '',
    problema: '', sena: '', presupuesto: '', estado: 'pendiente'
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const fechaHora = new Date().toLocaleString();
    onSave({ id: Date.now(), fechaHora, ...form });
    setForm({ nombre: '', marca: '', modelo: '', telefono: '', problema: '', sena: '', presupuesto: '', estado: 'pendiente' });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Agregar nuevo cliente</DialogTitle>
      <DialogContent sx={{ display: 'grid', gap: 2 }}>
        {['nombre','marca','modelo','telefono','problema','sena','presupuesto'].map(field => (
          <TextField
            key={field}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            name={field}
            type={field === 'sena' || field === 'presupuesto' ? 'number' : 'text'}
            value={form[field]}
            onChange={handleChange}
            fullWidth
            required={field !== 'sena'}
          />
        ))}
        <TextField
          select label="Estado" name="estado" value={form.estado} onChange={handleChange}
        >
          {['pendiente','en proceso','completado'].map(opt => (
            <MenuItem key={opt} value={opt}>{opt}</MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} variant="contained">Guardar</Button>
        <Button onClick={onClose}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  );
}
