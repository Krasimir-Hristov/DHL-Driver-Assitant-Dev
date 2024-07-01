import React from 'react';

import { useTranslation } from 'react-i18next';

import greenBookImg from '../assets/controlBookImg/controllBook.jpg';
import dayOfYearImg from '../assets/controlBookImg/cbDayOfYear.jpg';
import nameAndFamilyImg from '../assets/controlBookImg/cbName.jpg';
import currentDateImg from '../assets/controlBookImg/cbDate.jpg';
import licensePlateImg from '../assets/controlBookImg/cbPlates.jpg';

import DayOfYear from '../components/DayOfYear';
import CurrentDate from '../components/CurrentDate';
import DateRange from '../components/DateRange';

const ControllBook: React.FC = () => {
  const { t } = useTranslation();

  const rows = [
    {
      title: `${t('cbNameAndAddress')}`, // Примерен ключ от вашите i18n ресурси
      image: greenBookImg,
      description: `${t('cbNameAndAddressDesc')}`, // Примерен ключ от вашите i18n ресурси
    },
    {
      title: `${t('cbNameAndFamily')}`, // Примерен ключ от вашите i18n ресурси
      image: nameAndFamilyImg,
      description: `${t('cbNameAndFamilyDesc')}`, // Примерен ключ от вашите i18n ресурси
    },
    {
      title: `${t('cbLicensePlate')}`, // Примерен ключ от вашите i18n ресурси
      image: licensePlateImg,
      description: `${t('cbLicensePlateDesc')}`, // Примерен ключ от вашите i18n ресурси
    },

    // Добавете повече обекти тук, ако е необходимо
  ];

  return (
    <div>
      <div className='justify-center text-center'>
        <h1 className='text-red-800 font-extrabold uppercase my-4 text-2xl underline decoration-red-800 decoration-4 md:text-6xl'>
          {t('controllBook')}
        </h1>
        <p className='text-lg text-justify mx-4 my-2'>{t('cbDescription')}</p>
        <hr className='border-t border-gray-400 mx-4 my-4' />
      </div>

      <h1 className='text-2xl md:text-3xl lg:text-4xl mb-8 font-bold text-center '>
        {t('controlBookInfo')}
      </h1>

      <h2 className='justify-center text-center mt-5'>
        <DateRange />
      </h2>

      <div>
        <h2 className='justify-center text-center mt-5 text-3xl  uppercase'>
          {t('cbDayOfTheYear')}
        </h2>
        <div className='flex justify-center my-4'>
          <img
            src={dayOfYearImg}
            alt={t('cbDayOfTheYear')}
            width={400} // Запазете тези стойности за по-малки екрани
            height={400} // Запазете тези стойности за по-малки екрани
            className='w-96 h-96 lg:w-[500px] lg:h-[500px]' // Добавете класове за големи екрани
          />
        </div>
        <p className='justify-center text-center text-2xl'>
          {' '}
          <DayOfYear />{' '}
        </p>
        <hr className='border-t border-gray-400 mx-4 my-4' />
      </div>

      <div>
        <h2 className='justify-center text-center mt-5 text-3xl  uppercase'>
          {t('cbDate')}
        </h2>
        <div className='flex justify-center my-4'>
          <img
            src={currentDateImg}
            alt={t('cbDate')}
            width={400} // Запазете тези стойности за по-малки екрани
            height={400} // Запазете тези стойности за по-малки екрани
            className='w-96 h-96 lg:w-[500px] lg:h-[500px]' // Добавете класове за големи екрани
          />
        </div>
        <p className='justify-center text-center text-2xl'>
          <CurrentDate />
        </p>
        <hr className='border-t border-gray-400 mx-4 my-4' />
      </div>

      {rows.map((row, index) => (
        <div key={index} className='row'>
          <h2 className='justify-center text-center mt-5 text-3xl  uppercase'>
            {row.title}
          </h2>
          <div className='flex justify-center my-4'>
            <img
              src={row.image}
              alt={row.title}
              width={400} // Запазете тези стойности за по-малки екрани
              height={400} // Запазете тези стойности за по-малки екрани
              className='w-96 h-96 lg:w-[500px] lg:h-[500px]' // Добавете класове за големи екрани
            />
          </div>
          <p className='justify-center text-center text-2xl'>
            {row.description}
          </p>
          <hr className='border-t border-gray-400 mx-4 my-4' />
        </div>
      ))}
    </div>
  );
};

export default ControllBook;
