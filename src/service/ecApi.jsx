import { db } from '../config/Firebase'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

// Obtener todos los clientes
export const fetchClientes = async () => {
  const querySnapshot = await getDocs(collection(db, 'clientes'))
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }))
}

// Agregar cliente
export const createCliente = async (data) => {
  const { id, ...dataWithoutId } = data; // eliminar el id si existe
const docRef = await addDoc(collection(db, 'clientes'), dataWithoutId);
return { id: docRef.id, ...dataWithoutId };
}

// Actualizar cliente
export const updateCliente = async (id, data) => {
  if (typeof id !== 'string') throw new Error("El ID debe ser una cadena");
  const ref = doc(db, 'clientes', id)
  await updateDoc(ref, data)
}

// Eliminar cliente
export const deleteCliente = async (id) => {
  const clientRef = doc(db, 'clientes', id)
  await deleteDoc(clientRef)
}
