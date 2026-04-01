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
      <Route path="/services.html" element={<Services />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/about.html" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/contact.html" element={<ContactUs />} />
      <Route path="/planner" element={<AIPlanner />} />
      <Route path="/planner.html" element={<AIPlanner />} />
      <Route path="/services/:id" element={<ServiceDetail />} />
      <Route path="/catering-service.html" element={<ServiceDetail id="catering-service" />} />
      <Route path="/parties.html" element={<ServiceDetail id="parties" />} />
      <Route path="/get-together.html" element={<ServiceDetail id="get-together" />} />
      <Route path="/wedding.html" element={<ServiceDetail id="wedding" />} />
      <Route path="/functions.html" element={<ServiceDetail id="functions" />} />
      <Route path="/bhandara.html" element={<ServiceDetail id="bhandara" />} />
      <Route path="/music.html" element={<ServiceDetail id="music" />} />
    </Routes>
  );
}
