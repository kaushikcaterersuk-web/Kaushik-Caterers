import React from 'react';
import ReactDOM from 'react-dom/client';
import ContactUs from '../pages/ContactUs';
import { Layout } from '../components/Layout';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <ContactUs />
    </Layout>
  </React.StrictMode>
);
