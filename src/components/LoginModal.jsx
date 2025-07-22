// src/components/LoginModal.jsx
import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, Typography
} from '@mui/material';

const CLAVE_MAESTRA = import.meta.env.VITE_CLAVE_MAESTRA;

export default function LoginModal({ open, onLogin }) {
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (clave !== CLAVE_MAESTRA) {
      setError('Clave incorrecta');
      return;
    }
    if (!email.includes('@')) {
      setError('Email inválido');
      return;
    }

    setError('');
    onLogin(email); // se puede usar el email más adelante si querés
  };

  return (
    <Dialog open={open} fullWidth maxWidth="xs">
      <DialogTitle>Iniciar sesión</DialogTitle>
      <DialogContent>
        <TextField
          label="Correo electrónico"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Clave de acceso"
          type="password"
          fullWidth
          margin="normal"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />
        {error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleLogin} variant="contained" color="primary" fullWidth>
          Ingresar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
