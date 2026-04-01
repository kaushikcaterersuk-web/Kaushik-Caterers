import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServiceDetail from '../pages/ServiceDetail';
import { Layout } from '../components/Layout';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/services/:id" element={<ServiceDetail />} />
          {/* Fallback for direct .html access if needed */}
          <Route path="/service-detail.html" element={<ServiceDetail />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
