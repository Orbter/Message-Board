import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { UserProvider } from '@/contexts/UserContext';
import Router from './Router';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <Router />
    </UserProvider>
  </StrictMode>,
);
