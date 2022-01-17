import { collection, addDoc, getDocs, getDoc, doc, updateDoc } from "firebase/firestore";
import db from './firebaseConfig';

// función que crea los documentos  de las ordenes.
export const createSchool = async (name, city, depto, email, tel, date) => {
    return await addDoc(collection(db, 'admins', 'partners','schools'), {
        name,
        city,
        depto,
        email,
        tel,
        date,
    })
}
// función que obtiene la colección de documentos.
export const getSchools =  async () => {
    return await getDocs(collection(db, 'admins', 'partners', 'schools'));
}
// función que obtiene el id de cada documento.
export const getSchool = async (id) => {
    const docRef = doc(db, 'admins', 'partners', "schools", id);
    return await getDoc(docRef);
}
// función que obtiene el id y el estado de el documento.
export const updateSchool = async (id, state) => {
    const docRef = doc(db, 'admins', 'partners', "schools", id);
    return await updateDoc(docRef, state)
} 
