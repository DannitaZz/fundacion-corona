import { collection, setDoc, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// import { ref, getDownloadURL } from "firebase/storage";
import {db, storage} from './firebaseConfig';

// Colegios

export const createSchool = async (name, city, depto, email, tel, date,  pId) => {
    return await addDoc(collection(db,'partners', pId, 'schools'), {
        name,
        city,
        depto,
        email,
        tel,
        date,
        surveyMonkey: false,
    })
}

export const getSchools =  async () => {
    const auth = getAuth();
    const user = auth.currentUser; 
    return await getDocs(collection(db, 'partners',  user.uid, 'schools'));
}

export const getSchool = async (sId) => {
    const auth = getAuth();
    const user = auth.currentUser; 
    const docRef = doc(db, 'partners', user.uid, "schools", sId);
    return await getDoc(docRef);
}

export const updateSchool = async (pId, sId, updatedSchool) => {
    const docRef = doc(db,  'partners', pId, "schools", sId);
    return await updateDoc(docRef, updatedSchool)
} 

export const deleteSchool = async (pId, sId) => {
    const docRef = doc(db, 'partners', pId, "schools", sId);
    return await deleteDoc(docRef)
} 

// Aliados 

export const createPartner = async (email, pId) => {
    return await setDoc(collection(db,'partners', pId), {
        name : '',
        lastname: '',
        email,
        tel: '',
        
    })
}
export const getPartners =  async () => {
    return await getDocs(collection(db, 'partners'));
}

export const getPartner = async () => {
    const auth = getAuth();
    const user = auth.currentUser;  
    const docRef = doc(db, 'partners', user.uid);
    return await getDoc(docRef);
}
export const updatePartner = async (updatedPartner) => {
    const auth = getAuth();
    const user = auth.currentUser;  
    const docRef = doc(db, 'partners', user.uid);
    return await updateDoc(docRef, updatedPartner);
}

export const deletePartner = async (pId) => {
    const docRef = doc(db, 'partners', pId);
    return await deleteDoc(docRef)
} 

// Admins 
export const createAdmin = async (email, aId) => {
    return await setDoc(collection(db,'admins', aId), {
        name: '',
        lastname: '',
        email,
        tel: '',
        
    })
}
export const getAdmins =  async () => {
    return await getDocs(collection(db, 'admins'));
}

export const getAdmin = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const docRef = doc(db, 'admins', user.uid);
    return await getDoc(docRef);
}
export const updateAdmin = async (aId, updatedAdmin) => {
    const docRef = doc(db, 'admins', aId);
    return await updateDoc(docRef, updatedAdmin);
}

export const deleteAdmin = async (aId) => {
    const docRef = doc(db, 'admins', aId);
    return await deleteDoc(docRef)
} 

// Urls (Power BI)
export const createUrl = async (pId, sId, date, url, uId) => {
    return await setDoc(collection(db, 'partners', pId, 'schools', sId, 'urls', uId), {
        date, 
        url
    })
}
export const getUrls =  async (sId) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const pId = user.uid;
    return await getDocs(collection(db,'partners', pId, 'schools', sId, 'urls'));
}

export const getUrl =  async (pId, sId, uId) => {
    return await getDocs(collection(db,'partners', pId, 'schools', sId, 'urls', uId));
}

export const updateUrl = async (pId, sId, uId, updatedUrl) => {
    const docRef = doc(db, 'partners', pId, 'schools', sId, 'urls', uId );
    return await updateDoc(docRef, updatedUrl);
}

export const deleteUrl = async (pId, sId, uId, updatedUrl) => {
    const docRef = doc(db, 'partners', pId, 'schools', sId, 'urls', uId );
    return await deleteDoc(docRef);
}


// PDFs (pendiente)

export const updloadPDF = async (pdf) => {
    const storageRef = storage.ref();
    const archivoPath = storageRef.child(pdf.name);
    await archivoPath.put(pdf);
    console.log("archivo cargado:", pdf.name);
    const linkpdf = await archivoPath.getDownloadURL();
    // Se aconseja guardar este enlace en el estado para luego pasarlo a firestore
    return linkpdf
};


// Metodologias

export const createMethodology = async (name, description,  url) => {
    return await addDoc(collection(db,'methodology'), {
        name,
        description,
        url,
    })
}
export const getMethodologies =  async (mId) => {
    return await getDocs(collection(db, 'methodologies'));
}

export const getMethodology = async (mId) => {
    const docRef = doc(db, 'methodologies', mId);
    return await getDoc(docRef);
}
export const updateMethodology = async (mId, updatedMethodology) => {
    const docRef = doc(db, 'methodologies', mId);
    return await updateDoc(docRef, updatedMethodology);
}

export const deleteMethodology = async (mId) => {
    const docRef = doc(db, 'methodologies', mId);
    return await deleteDoc(docRef)
} 





