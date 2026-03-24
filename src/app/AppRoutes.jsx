import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home/HomePage';
import { ServicesPage } from '../pages/Services/ServicesPage';
import { WorkPage } from '../pages/Work/WorkPage';
import { AboutPage } from '../pages/About/AboutPage';
import { ContactPage } from '../pages/Contact/ContactPage';

/**
 * Main application routes
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
