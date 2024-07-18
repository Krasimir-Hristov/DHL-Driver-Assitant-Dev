import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='py-12 px-6 md:px-24'>
        <h1 className='text-4xl text-red-800 uppercase md:text-6xl font-extrabold text-center mb-6'>
          {t('greeding')}
        </h1>
        <h2 className='text-xl md:text-3xl font-bold py-6 text-center mb-8'>
          {t('wellcome')}
        </h2>
        <p className='text-lg md:text-xl font-bold py-6 '>{t('homeDesc')}</p>

        <p className='text-4xl font-extrabold text-red-800 mt-12 text-center'>
          {t('homeEnd')}
        </p>
      </div>
    </>
  );
};

export default Home;
