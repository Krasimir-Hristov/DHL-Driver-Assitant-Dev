import React from 'react';

import { useTranslation } from 'react-i18next';

import greenBookImg from '../assets/controlBookImg/controllBook.jpg';
import dayOfYearImg from '../assets/controlBookImg/cbDayOfYear.jpg';
import nameAndFamilyImg from '../assets/controlBookImg/cbName.jpg';
import currentDateImg from '../assets/controlBookImg/cbDate.jpg';
import licensePlateImg from '../assets/controlBookImg/cbPlates.jpg';
import drivingLineImg from '../assets/controlBookImg/cbDriving.jpg';
import breakLineImg from '../assets/controlBookImg/cbPause.jpg';
import workLineImg from '../assets/controlBookImg/cbLagerWork.jpg';
import destinationImg from '../assets/controlBookImg/cbDestination.jpg';
import exampleImg from '../assets/controlBookImg/cbDailyDiagram.jpg';
import startKMImg from '../assets/controlBookImg/cbKMStart.jpg';
import endKMImg from '../assets/controlBookImg/cbKMEnd.jpg';
import totalKMImg from '../assets/controlBookImg/cbSumKM.jpg';
import totalDrivingImg from '../assets/controlBookImg/cbSumDriving.jpg';
import totalBreakImg from '../assets/controlBookImg/cbSumPause.jpg';
import totalWorkImg from '../assets/controlBookImg/cbSumLager.jpg';
import totalDailyHoursImg from '../assets/controlBookImg/cbSumDaily.jpg';
import signatureImg from '../assets/controlBookImg/cbSignature.jpg';

import DayOfYear from '../components/DayOfYear';
import CurrentDate from '../components/CurrentDate';
import DateRange from '../components/DateRange';
import ListingCard from '../components/ListingCard';
import TitleAndDescripion from '../components/TitleAndDescripion';

const ControllBook: React.FC = () => {
  const { t } = useTranslation();

  const controllBookInfo = [
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
    {
      title: `${t('cbDrivingLine')}`, // Примерен ключ от вашите i18n ресурси
      image: drivingLineImg,
      description: `${t('cbDrivingLineDesc')}`, // Примерен ключ от вашите i18n ресурси
    },
    {
      title: `${t('cbBreakLine')}`, // Примерен ключ от вашите i18n ресурси
      image: breakLineImg,
      description: `${t('cbBreakLineDesc')}`, // Примерен ключ от вашите i18n ресурси
    },
    {
      title: `${t('cbWorkLine')}`, // Примерен ключ от вашите i18n ресурси
      image: workLineImg,
      description: `${t('cbWorkLineDesc')}`, // Примерен ключ от вашите i18n ресурси
    },
    {
      title: `${t('cbExample')}`, // Примерен ключ от вашите i18n ресурси
      image: exampleImg,
      description: `${t('cbExampleDesc')}`, // Примерен ключ от вашите i18n ресурси
    },
    {
      title: `${t('cbDestination')}`, // Примерен ключ от вашите i18n ресурси
      image: destinationImg,
      description: `${t('cbDestinationDesc')}`, // Примерен ключ от вашите i18n ресурси
    },
    {
      title: `${t('cbStart')}`, // Примерен ключ от вашите i18n ресурси
      image: startKMImg,
      description: `${t('cbStartDesc')}`, // Примерен ключ от вашите i18n ресурси
    },
    {
      title: `${t('cbEnd')}`, // Примерен ключ от вашите i18n ресурси
      image: endKMImg,
      description: `${t('cbEndDesc')}`, // Примерен ключ от вашите i18n ресурси
    },
    {
      title: `${t('cbTotal')}`, // Примерен ключ от вашите i18n ресурси
      image: totalKMImg,
      description: `${t('cbTotalDesc')}`, // Примерен ключ от вашите i18n ресурси
    },
    {
      title: `${t('cbTotalDriving')}`, // Примерен ключ от вашите i18n ресурси
      image: totalDrivingImg,
      description: `${t('cbTotalDrivingDesc')}`, // Примерен ключ от вашите i18n ресурси
    },
    {
      title: `${t('cbTotalBreak')}`, // Примерен ключ от вашите i18n ресурси
      image: totalBreakImg,
      description: `${t('cbTotalBreakDesc')}`, // Примерен ключ от вашите i18n ресурси
    },
    {
      title: `${t('cbTotalWork')}`, // Примерен ключ от вашите i18n ресурси
      image: totalWorkImg,
      description: `${t('cbTotalWorkDesc')}`, // Примерен ключ от вашите i18n ресурси
    },
    {
      title: `${t('cbTotalDailyHours')}`, // Примерен ключ от вашите i18n ресурси
      image: totalDailyHoursImg,
      description: `${t('cbTotalDailyHoursDesc')}`, // Примерен ключ от вашите i18n ресурси
    },
    {
      title: `${t('cbSignature')}`, // Примерен ключ от вашите i18n ресурси
      image: signatureImg,
      description: `${t('cbSignatureDesc')}`, // Примерен ключ от вашите i18n ресурси
    },
  ];

  return (
    <div className='bg-slate-200'>
      <div>
        <TitleAndDescripion
          title={t('controllBook')}
          description={t('cbDescription')}
        />
      </div>

      <h1 className='text-2xl md:text-3xl lg:text-4xl mb-8 font-extrabold text-center '>
        {t('controlBookInfo')}
      </h1>

      <div className='justify-center text-center  mt-10 border-8 border-black bg-yellow-500'>
        <h3 className='font-extrabold text-red-800 text-3xl uppercase'>
          {t('important')}
        </h3>
        <span>
          <DateRange />
        </span>
      </div>

      <div>
        <h2 className='justify-center text-center mt-5 text-3xl font-extrabold bg-yellow-500 text-red-800 p-2  uppercase'>
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
        <span className='justify-center text-center text-2xl'>
          {' '}
          <DayOfYear />{' '}
        </span>
        <hr className='border-t border-gray-400 mx-4 my-4' />
      </div>

      <div>
        <h2 className='justify-center text-center mt-5 text-3xl font-extrabold bg-yellow-500 text-red-800 p-2  uppercase'>
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
        <span className='justify-center text-center text-2xl'>
          <CurrentDate />
        </span>
        <hr className='border-t border-gray-400 mx-4 my-4' />
      </div>

      {controllBookInfo.map((row, index) => (
        <div>
          <div>
            <ListingCard
              key={index}
              title={row.title}
              image={row.image}
              description={row.description}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ControllBook;
