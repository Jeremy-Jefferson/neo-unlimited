import { BrowserRouter } from 'react-router-dom';
import { Header } from '../components/navigation/Header/Header';
import { Footer } from '../components/navigation/Footer/Footer';
import { AppRoutes } from './AppRoutes';

/**
 * Root application component
 */
export function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}