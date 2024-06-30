import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FlagIcon } from 'react-flag-kit';
import { useTranslation } from 'react-i18next';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface Language {
  code: string;
  lang: string;
}

const languages: Language[] = [
  { code: 'GB', lang: 'en' },
  { code: 'BG', lang: 'bg' },
  { code: 'RO', lang: 'ro' },
  { code: 'DE', lang: 'de' },
  { code: 'AL', lang: 'al' },
  { code: 'GR', lang: 'gr' },
  { code: 'IT', lang: 'it' },
  { code: 'TR', lang: 'tr' },
  { code: 'RS', lang: 'ru' },
  { code: 'HU', lang: 'hu' },
];

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false); // Close the menu after language change
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='fixed w-full top-0 bg-yellow-500 p-2 md:p-4 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='text-red-700 text-2xl font-bold'>
          <div className='flex gap-2 items-center'>
            <p className='text-3xl'>DHL Driver Assistant</p>
            <FlagIcon code={currentLanguage.code as any} size={24} />
          </div>
        </Link>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-black'>
            {isMenuOpen ? (
              <XMarkIcon className='w-6 h-6' />
            ) : (
              <Bars3Icon className='w-6 h-6' />
            )}
          </button>
        </div>
        <div
          className={`flex-col md:flex-row md:flex ${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex md:items-center`}
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
      </div>
    </nav>
  );
};

export default Navbar;
