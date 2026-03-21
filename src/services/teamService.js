import { db } from '../config/firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

// Referência da pasta
const teamRef = collection(db, 'teams');

export const teamService = {

  // Criar/Salvar novo usuário
  async setTeam(teamData) {
    // Gerando o Id
    const docRef = doc(teamRef);
    const documentId = docRef.id;

    return await addDoc(teamRef, 
        { 
          id: documentId, 
          teamData: teamData,
          createdAt: new Date() 
        }
    );
  },

  // Leitura do arquivo por id
  async getTeamById(teamId) {
    const q = query(teamRef, where("id", "==", teamId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  
  // Update/Delete/GetAll...
};