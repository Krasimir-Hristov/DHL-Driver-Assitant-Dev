import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className=' py-12 px-6 md:px-24'>
        <h1 className='text-4xl text-red-800 uppercase md:text-6xl font-extrabold text-center mb-6'>
          Здравйте, колеги!
        </h1>
        <h2 className='text-xl md:text-3xl font-bold text-center mb-8'>
          Добре дошли в приложението, което ви помага да управлявате своя
          работен ден и да пестите времето си.
        </h2>
        <p className='text-lg md:text-xl mb-4'>
          Нашето приложение е специално създадено за шофьорите на DHL, за да
          оптимизирате своите рутина и да улесните контрола върху тях. С нашата
          контролна книга можете лесно да отчитате времето на почивките си, да
          управлявате туровете си и да получавате необходимата информация като
          телефонни номера и баркодове, които често използвате.
        </p>
        <p className='text-lg md:text-xl'>
          Навигационната система MONA ви предоставя точни и оптимизирани
          маршрути, дори и в непознати места, за да можете да извършвате
          работата си по-ефективно и да постигате по-добри резултати.
        </p>
      </div>
    </>
  );
};

export default Home;
