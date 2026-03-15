import { db } from '../config/firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

// Referência da pasta
const userRef = collection(db, 'teams', "users");

export const userService = {

  // Criar/Salvar novo usuário
  async setUser(userData) {
    // Gerando o Id
    const docRef = doc(userRef);
    const documentId = docRef.id;

    return await addDoc(userRef, 
        { 
            id: documentId, 
            userData: userData,
            createdAt: new Date() 
        }
    );
  },

  // Leitura do arquivo por id
  async getUserById(userId) {
    const q = query(userRef, where("id", "==", userId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  
  // Update/Delete...
};