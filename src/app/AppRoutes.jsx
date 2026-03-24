import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home/HomePage';
import { WorkPage } from '../pages/Work/WorkPage';
import { AboutPage } from '../pages/About/AboutPage';

/**
 * Main application routes
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}