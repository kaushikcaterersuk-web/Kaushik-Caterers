import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AIPlanner from './pages/AIPlanner';
import ServiceDetail from './pages/ServiceDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/planner" element={<AIPlanner />} />
      <Route path="/services/:id" element={<ServiceDetail />} />
    </Routes>
  );
}
