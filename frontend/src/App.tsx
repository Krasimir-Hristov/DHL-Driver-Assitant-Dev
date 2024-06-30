import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <main className='flex-grow pt-32 md:pt-28 mb-4'>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
};

export default App;
