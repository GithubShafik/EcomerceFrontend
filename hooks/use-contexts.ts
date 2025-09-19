'use client';

import { AuthContext } from '@/context/AuthUser/auth-context';
import { useContext } from 'react';

export const useAuthUserContexts = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuthContext context must be use inside AuthProvider');

  return context;
};

