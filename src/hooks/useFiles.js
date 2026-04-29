import { useState } from 'react';
import { fileService } from '../services/fileService';

// Usando TanStack Query (pra lidar com as funções assíncronas)
export function useFiles(fileId) {
  // 'files' é a chave única do cache. Se mudar o fileId, ele busca de novo.
  return useQuery({
    queryKey: ['files', fileId],
    queryFn: () => fileService.getAllFiles(fileId),
  });
}

// No componente...
// const { data, isLoading, error } = useFiles("123");

// ----------------- Antigamente ------------------
// export function useFiles(fileId) {
//   const [files, setFiles] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchFiles = async () => {
//     setLoading(true);
//     try {
//       const data = await fileService.getAllFiles(fileId);
//       setFiles(data);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { files, fetchFiles, loading };
// }