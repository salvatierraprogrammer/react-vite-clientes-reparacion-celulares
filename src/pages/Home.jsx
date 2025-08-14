import React, { useState, useEffect } from 'react';
import { 
  Container, Button, Typography, Grid, CircularProgress 
} from '@mui/material'; 
import AddClientModal from '../components/AddClientModal';
import EditClientModal from '../components/EditClientModal';
import ViewClientModal from '../components/ViewClientModal';
import ProviderList from '../components/ProviderList';
import ClientCard from '../components/ClientCard';
import { useNavigate } from 'react-router-dom';
import { fetchClientes, createCliente, updateCliente, deleteCliente } from '../service/ecApi';
import CardOpcionesTecnico from '../components/CardOpcionesTecnico';

export default function Home() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [modalType, setModalType] = useState(null); // 'add' | 'view' | 'edit'
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  
const navigate = useNavigate();
  const loadClients = async () => {
    setInitialLoading(true);
    try {
      const data = await fetchClientes();
      setClients(data);
    } catch (error) {
      console.error("Error cargando clientes:", error);
      alert("Error cargando clientes");
    }
    setInitialLoading(false);
  };

  useEffect(() => {
    loadClients();
  }, []);

  const openAdd = () => { if (!loading) setModalType('add'); };
  const openView = client => { if (!loading) { setSelectedClient(client); setModalType('view'); } };
  const openEdit = client => { if (!loading) { setSelectedClient(client); setModalType('edit'); } };
  const closeModal = () => {
    setModalType(null);
    setSelectedClient(null);
  };

  const handleAdd = async (client) => {
    setLoading(true);
    try {
      await createCliente(client);
      await loadClients();
      closeModal();
    } catch (e) {
      console.error("Error agregando cliente: ", e);
      alert("Error al guardar cliente");
    }
    setLoading(false);
  };

  const handleEdit = async (updated) => {
    if (!updated.id) {
      alert("Error interno: el cliente no tiene ID");
      return;
    }
    setLoading(true);
    try {
      const { id, ...rawData } = updated;
      const clientData = {
        ...rawData,
        telefono: String(rawData.telefono ?? ''),
        sena: Number(rawData.sena ?? 0),
        presupuesto: Number(rawData.presupuesto ?? 0),
        estado: String(rawData.estado ?? 'pendiente'),
      };
      await updateCliente(id, clientData);
      await loadClients();
      closeModal();
    } catch (e) {
      console.error("Error editando cliente: ", e);
      alert("Error al editar cliente");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Eliminar este cliente?")) return;
    setLoading(true);
    try {
      await deleteCliente(id);
      await loadClients();
    } catch (e) {
      console.error("Error eliminando cliente: ", e);
      alert("Error al eliminar cliente");
    }
    setLoading(false);
  };

  return (
    <Container sx={{ mt: 2, position: 'relative' }}>
    <CardOpcionesTecnico
  onAction={(accion) => {
    switch (accion) {
      case 'abrir':
        console.log("Abrir celular");
        // abrir modal o nueva página
        break;
      case 'diagnostico':
        console.log("Diagnóstico");
        break;
        case 'Proveedores':
        navigate('/proveedores');
        break;
      case 'soldar':
        console.log("Soldar componente");
        break;
      case 'cambiarModulo':
        console.log("Cambiar módulo");
        break;
      case 'software':
        console.log("Instalar software");
        break;
      case 'caja':
        console.log("Preparar caja / embalaje");
        break;
      default:
        break;
    }
  }}
/>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={openAdd} 
        disabled={loading || initialLoading}
        sx={{ mb: 2 }}
      >
        + Agregar nuevo cliente
      </Button>

      <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>Lista de Clientes</Typography>

      {initialLoading ? (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <CircularProgress />
          <Typography>Cargando clientes...</Typography>
        </div>
      ) : (
        <>
          {clients.length === 0 ? (
            <Typography sx={{ mt: 3 }}>No hay clientes para mostrar.</Typography>
          ) : (
            <Grid container spacing={2}>
              {clients.map(client => (
                <ClientCard
                  key={client.id}
                  client={client}
                  onView={() => openView(client)}
                  onEdit={() => openEdit(client)}
                  onDelete={() => handleDelete(client.id)}
                />
              ))}
            </Grid>
          )}
        </>
      )}

      <Typography variant="h5" sx={{ mt: 5 }}>Proveedores recomendados</Typography>
      <ProviderList sx={{ mt: 1 }} />

      {/* Spinner */}
      {loading && !initialLoading && (
        <div style={{
          position: 'fixed', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1500,
          backgroundColor: 'rgba(255,255,255,0.7)',
          borderRadius: 8,
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          boxShadow: '0 0 10px rgba(0,0,0,0.3)'
        }}>
          <CircularProgress />
          <Typography variant="body1">Procesando...</Typography>
        </div>
      )}

      {/* Modales */}
      <AddClientModal open={modalType === 'add'} onClose={closeModal} onSave={handleAdd} />
      {selectedClient && (
        <>
          <EditClientModal
            open={modalType === 'edit'}
            onClose={closeModal}
            client={selectedClient}
            onSave={handleEdit}
          />
          <ViewClientModal
            open={modalType === 'view'}
            onClose={closeModal}
            client={selectedClient}
          />
        </>
      )}
    </Container>
  );
}
