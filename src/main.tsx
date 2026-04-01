import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import { Layout } from './components/Layout';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Home />
      </Layout>
    </Router>
  </React.StrictMode>
);
