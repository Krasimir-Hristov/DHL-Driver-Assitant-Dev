import React from 'react';
// import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  // const { t, i18n } = useTranslation();

  return (
    <>
      <div className='py-12 px-6 md:px-24'>
        <h1 className='text-4xl text-red-800 uppercase md:text-6xl font-extrabold text-center mb-6'>
          Здравейте, колеги!
        </h1>
        <h2 className='text-xl md:text-3xl font-bold py-6 text-center mb-8'>
          Добре дошли в приложението, което ви помага да управлявате своя
          работен ден и да пестите времето си.
        </h2>
        <p className='text-lg md:text-xl font-bold py-6 '>
          Това приложение е ключов инструмент за шофьорите на DHL, предлагащ
          множество ползи и улеснения. С него можете да спестите значително
          време, можете да проверите по всяко време вашите почивни дни със
          години напред, лесно и бързо попълвате контролната книга с
          необходимата информация, и намирате важни телефонни номера за спешни
          случаи. Приложението ви позволява да сканирате актуалните баркодове и
          да планирате маршрути по-ефективно, осигурявайки по-добри резултати с
          навигационната система MONA и още много други полезни функции.
        </p>

        <p className='text-4xl font-extrabold text-red-800 mt-12 text-center'>
          Приятен работен ден!
        </p>
      </div>
    </>
  );
};

export default Home;
