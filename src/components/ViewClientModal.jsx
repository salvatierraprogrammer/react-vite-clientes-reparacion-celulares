import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, Button, DialogActions, Typography, Stack
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import PhoneIcon from '@mui/icons-material/Phone';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ScheduleIcon from '@mui/icons-material/Schedule';

const iconMap = {
  nombre: <PersonIcon sx={{ mr: 1 }} />,
  modelo: <PhoneIphoneIcon sx={{ mr: 1 }} />,
  marca: <BrandingWatermarkIcon sx={{ mr: 1 }} />,
  telefono: <PhoneIcon sx={{ mr: 1 }} />,
  problema: <ErrorOutlineIcon sx={{ mr: 1 }} />,
  sena: <AttachMoneyIcon sx={{ mr: 1 }} />,
  presupuesto: <CreditCardIcon sx={{ mr: 1 }} />,
  estado: <AssignmentTurnedInIcon sx={{ mr: 1 }} />,
  fechaHora: <ScheduleIcon sx={{ mr: 1 }} />
};

export default function ViewClientModal({ open, onClose, client }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Detalle de cliente</DialogTitle>
      <DialogContent dividers>
        {client && Object.entries(client).map(([key, val]) => (
          key !== 'id' && (
            <Stack key={key} direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
              {iconMap[key] || <span style={{ width: 24 }} />} {/* fallback espacio */}
              <Typography variant="body1">
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {val}
              </Typography>
            </Stack>
          )
        ))}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            backgroundColor: '#00f5cc',
            color: '#000',
            '&:hover': { backgroundColor: '#1affd5' }
          }}
        >
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
