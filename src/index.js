import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './page/Header';
import MainPage from './page/MainPage';
import Footer from './page/Footer';
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Header />
    <MainPage />
    <Footer />
  </React.StrictMode>
);