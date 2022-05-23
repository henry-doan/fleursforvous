import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from "./providers/AuthProvider";
import { initMiddleware } from 'devise-axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SubmissionProvider from './providers/SubmissionProvider';

initMiddleware();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SubmissionProvider>
          <App />
        </SubmissionProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);