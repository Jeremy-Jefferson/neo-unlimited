import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Global styles
import './styles/reset.css';
import './styles/tokens.css';
import './styles/typography.css';
import './styles/globals.css';
import './styles/utilities.css';

import { App } from './app/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
