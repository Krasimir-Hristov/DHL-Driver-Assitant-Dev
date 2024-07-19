import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { navLinks } from '../constants';
import { languages } from '../constants';

import { FlagIcon } from 'react-flag-kit';
import { useTranslation } from 'react-i18next';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface Language {
  code: string;
  lang: string;
}

const Navbar: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    code: 'GB',
    lang: 'en',
  });

  useEffect(() => {
    const currentLang = languages.find((lang) => lang.lang === i18n.language);
    if (currentLang) {
      setCurrentLanguage(currentLang);
    }
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false); // Close the language menu after language change
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isLanguageMenuOpen) {
      setIsLanguageMenuOpen(false);
    } // Close the language menu if the main menu is toggled
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } // Close the main menu if the language menu is toggled
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='fixed w-full top-0 bg-yellow-500 p-2 md:p-4 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='text-red-700 text-2xl font-bold flex-grow'>
          <div className='flex gap-2 items-center'>
            <p className='text-3xl'>DHL Driver Assistant</p>
            <div className='hidden md:block'>
              <FlagIcon code={currentLanguage.code as any} size={24} />
            </div>

            <FlagIcon
              code={currentLanguage.code as any}
              size={24}
              onClick={toggleLanguageMenu}
              className='cursor-pointer md:hidden'
            />
          </div>
        </Link>
        <div className='hidden md:flex'>
          {languages.map(({ code, lang }) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className='text-black hover:text-white mx-1'
            >
              <FlagIcon code={code as any} size={24} />
            </button>
          ))}
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-black'>
            {isMenuOpen ? (
              <XMarkIcon className='w-6 h-6' />
            ) : (
              !isLanguageMenuOpen && <Bars3Icon className='w-6 h-6' />
            )}
          </button>
        </div>
      </div>
      <div
        className={`bg-red-800 py-2 px-4 text-center ${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col md:hidden`}
      >
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            onClick={closeMenu}
            className='mx-2 my-1 font-bold text-lg md:text-base md:font-semibold text-yellow-500'
          >
            {t(label)}
          </Link>
        ))}
      </div>
      <div
        className={`bg-red-800 py-2 px-4 text-center justify-center ${
          isLanguageMenuOpen ? 'flex' : 'hidden'
        } flex-col md:hidden`}
      >
        <div className='flex flex-wrap justify-center md:justify-start'>
          {languages.map(({ code, lang }) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className='text-black hover:text-white mx-1 my-1 md:my-0'
            >
              <FlagIcon code={code as any} size={24} />
            </button>
          ))}
        </div>
      </div>
      <div className='hidden md:flex bg-red-800 py-2 px-4 text-center justify-center'>
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className='mx-2 font-bold text-lg md:text-base md:font-semibold text-yellow-500'
          >
            {t(label)}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
