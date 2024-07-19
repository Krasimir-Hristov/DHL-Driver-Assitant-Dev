import React from 'react';

import { useTranslation } from 'react-i18next';

import abruch from '../assets/barcodes/abruch.jpg';
import firmaClose from '../assets/barcodes/firmaClose.jpg';
import give from '../assets/barcodes/give.jpg';
import lagern from '../assets/barcodes/lagern.jpg';
import streetClose from '../assets/barcodes/streetclose.jpg';

const Barcodes: React.FC = () => {
  const { t } = useTranslation();

  const barcodesInfo = [
    {
      title: 'abruch',
      image: abruch,
      description: 'abruch',
    },
    {
      title: 'Firma Close',
      image: firmaClose,
      description: 'firmaClose',
    },
    {
      title: 'give',
      image: give,
      description: 'give',
    },
    {
      title: 'lagern',
      image: lagern,
      description: 'lagern',
    },
    {
      title: 'streetClose',
      image: streetClose,
      description: 'streetClose',
    },
  ];
  return (
    <div>
      {barcodesInfo.map((row, index) => (
        <div key={index} className='row'>
          <h2 className='justify-center text-center mt-5 text-3xl font-extrabold bg-yellow-500 text-red-800 p-2  uppercase'>
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
          <p className='justify-center text-center text-2xl font-bold'>
            {row.description}
          </p>
          <hr className='border-t border-gray-400 mx-4 my-4' />
        </div>
      ))}
    </div>
  );
};

export default Barcodes;
