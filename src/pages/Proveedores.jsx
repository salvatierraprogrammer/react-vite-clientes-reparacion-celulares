import React, { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress, Grid, Button, Box, Modal, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LanguageIcon from '@mui/icons-material/Language';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function Proveedores() {
  const [baterias, setBaterias] = useState([]);
  const [modulos, setModulos] = useState([]);
  const [masProveedores, setMasProveedores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProveedor, setSelectedProveedor] = useState(null);

     useEffect(() => {
    const modulosData = [
      { id: 1, nombre: 'Punto Cel', whatsapp: '1160166755', web: '', redSocial: 'https://www.instagram.com/puntocel/', direccion: 'Larrea 224', localidad: 'CABA', descripcion: 'Módulos para celulares.' },
      { id: 2, nombre: 'World Cell', whatsapp: '1121624953', web: 'https://www.worldcell.com.ar', redSocial: '', direccion: 'Larrea 278', localidad: 'CABA', descripcion: 'Módulos para celulares.' },
      { id: 3, nombre: 'Tecno Shop', whatsapp: '1161507687', web: '', redSocial: '', direccion: 'Corrientes 2451', localidad: 'CABA', descripcion: 'Módulos para celulares.' },
      { id: 4, nombre: 'El Celu', whatsapp: '1149539630', web: 'https://www.elcelu.com.ar/', redSocial: '', direccion: 'Larrea 141', localidad: 'CABA', descripcion: 'Módulos para celulares.' },
      { id: 5, nombre: 'Sara Cell', whatsapp: '1127744463', web: '', redSocial: '', direccion: 'Larrea 179', localidad: 'CABA', descripcion: 'Módulos para celulares.' },
      { id: 6, nombre: 'Silihard', whatsapp: '1150209922', web: 'https://silihardtouch.com/', redSocial: '', direccion: 'Misiones 323', localidad: 'CABA', descripcion: 'Módulos para celulares y \ntablets.' },
       {id: 7, nombre: "Técnico Cerca",whatsapp: '+54 9 11 2471-9351', web: "https://tienda.tecnicocerca.com/", direccion: 'Valentin virasoro 1195', localidad: 'CABA', descripcion: 'Módulos para celulares y \ntablets.' },
    ];

    const bateriasData = [
      { id: 8, nombre: 'Punto Cel', whatsapp: '1160166755', web: '', redSocial: '', direccion: 'Larrea 224', localidad: 'CABA', descripcion: 'Baterías y módulos para \celulares.' },
      { id: 9, nombre: 'Chino Cochino', whatsapp: '', web: 'https://willycellhn.com/', redSocial: '', direccion: 'Azcuénaga 408', localidad: 'CABA',  descripcion: 'Cables, fundas, templados y \naccesorios para iPhone.' },
      { id: 10, nombre: 'Paragua', whatsapp: '', web: '', redSocial: '', direccion: 'Azcuénaga 211', localidad: 'CABA', descripcion: 'Baterías, placas de carga, \ncámaras, flex main y tapas.' },
      { id: 11, nombre: 'TecnoBattery', whatsapp: '1173632435', web: 'https://tecnobattery.mercadoshops.com.ar/', redSocial: '', direccion: 'Rivadavia 4396 Local 30', localidad: 'CABA', descripcion: 'Baterías varias y \nbaterías para iPhone.' }
    ];

    const masProveedoresData = [
      
      { id: 12, nombre: 'Mundo Mobile', whatsapp: '541167958427', web: 'https://mundomobile.com.ar/', redSocial: '', direccion: 'Av Santa Fe 1780 piso 7 dpto 703', localidad: 'CABA', descripcion: 'Baterías para celulares.' },
      { id: 13, nombre: 'TecnoLand', whatsapp: '1170794040', web: 'https://www.tecnoland.com.ar/', redSocial: '', direccion: 'Av. Corrientes 2279, Once', localidad: 'CABA', descripcion: 'Baterías para celulares.' },
      { id: 14, nombre: 'Infinit Cell', whatsapp: '1125802625', web: 'https://infinitcell.com/', redSocial: '', direccion: 'Av. Corrientes 2407', localidad: 'CABA', descripcion: 'Módulos iOS/Android, \npines y placas de carga.' },
      { id: 15, nombre: 'Service Center', whatsapp: '1155120378', web: 'https://www.servicecenter.com.ar/', redSocial: '', direccion: '25 de mayo 87', localidad: 'Avellaneda', descripcion: 'Baterías para celulares.' },
      { id: 16, nombre: 'SmartParts', whatsapp: '1144138480', web: 'https://smartparts.com.ar/', redSocial: '', direccion: 'Av. 25 de mayo 178 piso 1', localidad: 'Lanus Oeste, Buenos Aires', descripcion: 'Módulos y baterías para celulares.' }

    ];

    setTimeout(() => {
      setBaterias(bateriasData);
      setModulos(modulosData);
      setMasProveedores(masProveedoresData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleOpenModal = (proveedor) => {
    setSelectedProveedor(proveedor);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProveedor(null);
  };

  const renderLista = (lista) => (
    <Grid container spacing={2}>
      {lista.map((p) => (
        <Grid item xs={12} sm={6} md={3} key={p.id}>
          <Box
            sx={{
              padding: 2,
              border: '1px solid #ccc',
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              bgcolor: '#1a1a1a',
              color: '#fff',
              height: '100%',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <LocalShippingIcon sx={{ color: '#00f2ff' }} />
              <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600 }}>
                {p.nombre}
              </Typography>
            </Box>

            {p.whatsapp && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <WhatsAppIcon sx={{ color: '#00ff7f' }} />
                <Typography>{p.whatsapp}</Typography>
              </Box>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <LocationOnIcon sx={{ color: '#ff4b4b' }} />
              <Typography>
                {p.direccion}, {p.localidad}
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ whiteSpace: 'pre-line', flexGrow: 1 }}>
              {p.descripcion}
            </Typography>

            <Button
              variant="outlined"
              sx={{ mt: 2, borderColor: '#00f2ff', color: '#00f2ff' }}
              onClick={() => handleOpenModal(p)}
            >
              Ver detalle
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Proveedores</Typography>
      {loading ? (
        <Box textAlign="center">
          <CircularProgress />
          <Typography>Cargando proveedores...</Typography>
        </Box>
      ) : (
        <>
          <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>Baterías</Typography>
          {renderLista(baterias)}

          <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>Módulos</Typography>
          {renderLista(modulos)}

          <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>Otros Proveedores</Typography>
          {renderLista(masProveedores)}
        </>
      )}

      {/* Modal */}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: '#1a1a1a',
            color: '#fff',
            border: '2px solid #00f2ff',
            borderRadius: 2,
            p: 4,
          }}
        >
          {selectedProveedor && (
            <>
              <Typography variant="h6" sx={{ mb: 2 }}>{selectedProveedor.nombre}</Typography>

              {selectedProveedor.whatsapp && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <WhatsAppIcon sx={{ color: '#00ff7f' }} />
                  <Link
                    href={`https://wa.me/${selectedProveedor.whatsapp.replace(/\D/g,'')}`}
                    target="_blank"
                    underline="hover"
                    sx={{ color: '#00ff7f' }}
                  >
                    {selectedProveedor.whatsapp}
                  </Link>
                </Box>
              )}

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <LocationOnIcon sx={{ color: '#ff4b4b' }} />
                <Link
                  href={`https://www.google.com/maps/search/${encodeURIComponent(selectedProveedor.direccion + ', ' + selectedProveedor.localidad)}`}
                  target="_blank"
                  underline="hover"
                  sx={{ color: '#ff4b4b' }}
                >
                  {selectedProveedor.direccion}, {selectedProveedor.localidad}
                </Link>
              </Box>

              {(selectedProveedor.web || selectedProveedor.redSocial) && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <LanguageIcon sx={{ color: '#00f2ff' }} />
                  <Link
                    href={selectedProveedor.web || selectedProveedor.redSocial}
                    target="_blank"
                    underline="hover"
                    sx={{ color: '#00f2ff' }}
                  >
                    {selectedProveedor.web || 'Red Social'}
                  </Link>
                </Box>
              )}

              <Typography sx={{ whiteSpace: 'pre-line', mt: 2 }}>{selectedProveedor.descripcion}</Typography>

              <Button
                variant="outlined"
                sx={{ mt: 3, borderColor: '#00f2ff', color: '#00f2ff' }}
                onClick={handleCloseModal}
              >
                Cerrar
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
}
