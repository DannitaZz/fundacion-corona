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

    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    
    // Signed in
    const qPartners = await getPartners();
    const qAdmins = await getAdmins();
    const partners = qPartners.forEach((doc) => {
        return doc.data();
    });
    const admins = qAdmins.forEach((doc) => {
        return doc.data();
    });
    const partnersEmail = partners.map(partner => partner.email);
    const adminsEmail = admins.map(admin => admin.email);
    

    if (email.includes(adminsEmail)) {
        const user = userCredential.user;
        // Ya sea mandar el tipo de usuario al estado o al router para saber qué renderizar
        console.log(user, 'Es un administrador')
    }
    
    if (email.includes(partnersEmail)) {
        const user = userCredential.user;
        // Ya sea mandar el tipo de usuario al estado o al router para saber qué renderizar
        console.log(user, 'Es un aliado')
    }
    
}
