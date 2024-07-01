import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ControllBook from './pages/ControllBook';
import DayOffCalendar from './pages/DayOffCalendar';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          {/* Increase padding top for different screen sizes even more */}
          <main className='flex-grow mb-4 pt-24 md:pt-28'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/controllbook' element={<ControllBook />} />
              <Route path='/contact' element={<DayOffCalendar />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
};

export default App;
