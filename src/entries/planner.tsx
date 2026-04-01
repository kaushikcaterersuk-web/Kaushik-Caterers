import React from 'react';
import ReactDOM from 'react-dom/client';
import AIPlanner from '../pages/AIPlanner';
import { Layout } from '../components/Layout';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <AIPlanner />
    </Layout>
  </React.StrictMode>
);
