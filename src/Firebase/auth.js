import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createAdmin, createPartner, getAdmins, getPartners } from "./functions";


export const createUserPartner = (email, password) => {
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const email = user.email;
      const id = user.uid;
      createPartner(email, id);
  
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export const createUserAdmin = (email, password) => {
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const email = user.email;
      createAdmin(email);
  
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export const userRol = { rol: '' };

export const getNameUser = ()=>{
  const auth = getAuth();
  const user = auth.currentUser; 
  console.log(user)
  return user.displayName; 
}

export const signIn = async (email, password) => {
    const auth = getAuth();

    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    
    // Signed in
    const qPartners = await getPartners();
    const qAdmins = await getAdmins();

    let admins = []
    let partners = []

    qPartners.forEach((doc) => {
        partners.push(doc.data().email);
    });
    qAdmins.forEach((doc) => {
        admins.push(doc.data().email);
    });

    if (admins.includes(email)) {
        userRol.rol = 'admin';
        const user = userCredentials.user;
        console.log(user.uid);
        console.log('Es un administrador')
        return true;
    }
    
    else if (partners.includes(email)) {
        // Setear al estado { rol: "partner"}
        userRol.rol = 'partner';
        const user = userCredentials.user;
        console.log(user.uid)
        console.log('Es un aliado')
        return true;
    }
    return false;
}



