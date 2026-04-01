import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ServiceDetail from '../pages/ServiceDetail';
import { Layout } from '../components/Layout';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <ServiceDetail id="music" />
      </Layout>
    </Router>
  </React.StrictMode>
);
