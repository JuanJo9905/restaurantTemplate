import { useState } from 'react';

export const useRouter = () => {
  const [currentPage, setCurrentPage] = useState('home');
  
  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  return { currentPage, navigate };
};
