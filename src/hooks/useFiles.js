import { useState } from 'react';
import { fileService } from '../services/fileService';

export function useFiles(fileId) {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFiles = async () => {
    setLoading(true);
    try {
      const data = await fileService.getAllFiles(fileId);
      setFiles(data);
    } finally {
      setLoading(false);
    }
  };

  return { files, fetchFiles, loading };
}