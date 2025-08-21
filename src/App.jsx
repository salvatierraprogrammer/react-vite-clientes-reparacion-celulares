import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Proveedores from './pages/Proveedores';
import Clientes from './pages/Clientes';
import LoginModal from './components/LoginModal';
import CardOpcionesTecnico from './components/CardOpcionesTecnico';

import {
  Box,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

function AppContent({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  /** Maneja las acciones seleccionadas en el menú técnico */
  const handleAction = (accion) => {
    switch (accion) {
      case 'Home':
        navigate('/');
        break;
     case 'Clientes':
        navigate('/clientes');
        break;
      case 'Proveedores':
        navigate('/proveedores');
        break;
      case 'abrir':
        console.log('Abrir celular');
        break;
      case 'diagnostico':
        console.log('Diagnóstico');
        break;
      case 'soldar':
        console.log('Soldar componente');
        break;
      case 'cambiarModulo':
        console.log('Cambiar módulo');
        break;
      case 'software':
        console.log('Instalar software');
        break;
      case 'caja':
        console.log('Preparar caja / embalaje');
        break;
      default:
        console.warn('Acción no reconocida');
        break;
    }
    if (isMobile) setDrawerOpen(false); // cierra el drawer en móvil
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: theme.palette.background.default,
      }}
    >
      {/* HEADER */}
      <Header
        onMenuClick={isAuthenticated && isMobile ? () => setDrawerOpen(true) : null}
      />

      {/* MODAL LOGIN */}
      <LoginModal
        open={!isAuthenticated}
        onLogin={() => setIsAuthenticated(true)}
      />

      {/* MAIN LAYOUT */}
      <Box sx={{ flex: 1, display: 'flex', position: 'relative' }}>
        {/* SIDEBAR FIJO EN ESCRITORIO */}
        {isAuthenticated && !isMobile && (
          <Box
            sx={{
              width: 260,
              bgcolor: theme.palette.background.paper,
              borderRight: `1px solid ${theme.palette.primary.main}`,
              p: 2,
              boxShadow: 2,
            }}
          >
            <CardOpcionesTecnico onAction={handleAction} />
          </Box>
        )}

        {/* DRAWER EN MÓVIL */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              width: 260,
              bgcolor: theme.palette.background.paper,
              p: 2,
              borderRight: `1px solid ${theme.palette.primary.main}`,
            },
          }}
        >
          <CardOpcionesTecnico onAction={handleAction} />
        </Drawer>

        {/* ÁREA PRINCIPAL */}
        <Box sx={{ flexGrow: 1, p: 3, overflowY: 'auto' }}>
          {isAuthenticated && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/proveedores" element={<Proveedores />} />
            </Routes>
          )}
        </Box>
      </Box>

      {/* FOOTER */}
      <Footer />
    </Box>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <AppContent
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </Router>
  );
}
