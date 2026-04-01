import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../pages/Home';
import { Layout } from '../components/Layout';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
);
