import { db } from '../config/firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

// Referência da pasta
const fileRef = collection(db, 'teams', "files");

export const fileService = {

  // Criar/Salvar novo arquivo
  async saveFile(fileData) {
    // Gerando o Id
    const docRef = doc(fileRef);
    const documentId = docRef.id;

    return await addDoc(fileRef, 
        { 
            id: documentId, 
            fileData: fileData, 
            createdAt: new Date() 
        }
    );
  },

  // Leitura do arquivo por id
  async getFileById(fileId) {
    const q = query(fileRef, where("id", "==", fileId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  
  // Update/Delete...
};