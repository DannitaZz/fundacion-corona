import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
// import { ref, getDownloadURL } from "firebase/storage";
import {db, storage} from './firebaseConfig';

// Colegios

export const createSchool = async (name, city, depto, email, tel, date, aId, pId) => {
    return await addDoc(collection(db, 'admins', aId, 'partners', pId, 'schools'), {
        name,
        city,
        depto,
        email,
        tel,
        date,
    })
}

export const getSchools =  async (aId, pId) => {
    return await getDocs(collection(db, 'admins', aId, 'partners',  pId, 'schools'));
}

export const getSchool = async (aId, pId, sId) => {
    const docRef = doc(db, 'admins', aId,  'partners', pId, "schools", sId);
    return await getDoc(docRef);
}

export const updateSchool = async (aId, pId, sId) => {
    const docRef = doc(db, 'admins', aId,  'partners', pId, "schools", sId);
    return await updateDoc(docRef)
} 

export const deleteSchool = async (aId, pId, sId) => {
    const docRef = doc(db, 'admins', aId,  'partners', pId, "schools", sId);
    return await deleteDoc(docRef)
} 

// Aliados 

export const updatePartner = async (aId, pId) => {
    const docRef = doc(db, 'admins', aId, 'partners', pId);
    return await updateDoc(docRef)
}

// Urls

export const getUrls =  async (aId, pId, sId) => {
    return await getDocs(collection(db, 'admins', aId, 'partners', pId, 'schools', sId, 'urls'));
}

// PDFs

export const updloadPDF = async (pdf) => {
    const storageRef = storage.ref();
    const archivoPath = storageRef.child(pdf.name);
    await archivoPath.put(pdf);
    console.log("archivo cargado:", pdf.name);
    const linkpdf = await archivoPath.getDownloadURL();
    // Se aconseja guardar este enlace en el estado para luego pasarlo a firestore
    return linkpdf
};





