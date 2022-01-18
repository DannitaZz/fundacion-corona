import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createAdmin, createPartner, getAdmins, getPartners } from "./functions";


export const createUserPartner = (email, password) => {
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const email = user.email;
      createPartner(email);
  
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



export const signIn = async (email, password) => {
    const auth = getAuth();

    await signInWithEmailAndPassword(auth, email, password)
    
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
    console.log('Both', admins, partners);

    console.log('Email', email);
     console.log(admins.includes(email));
     console.log(partners.includes(email));

    if (admins.includes(email)) {
        // const user = userCredential.user;
        // Ya sea mandar el tipo de usuario al estado o al router para saber qué renderizar
        console.log('Es un administrador')
    }
    
    else if (partners.includes(email)) {
        // const user = userCredential.user;
        // Ya sea mandar el tipo de usuario al estado o al router para saber qué renderizar
        console.log('Es un aliado')
    }
    
}
