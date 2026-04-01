import React from 'react';
import ReactDOM from 'react-dom/client';
import Services from '../pages/Services';
import { Layout } from '../components/Layout';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <Services />
    </Layout>
  </React.StrictMode>
);
