import React from 'react';
// import { useTranslation } from 'react-i18next';
import someImage from '../assets/controllBook.jpg';

const ControllBook: React.FC = () => {
  // const { t } = useTranslation();

  const rows = [
    {
      title: 'title', // Примерен ключ от вашите i18n ресурси
      image: someImage,
      description: 'description', // Примерен ключ от вашите i18n ресурси
    },

    // Добавете повече обекти тук, ако е необходимо
  ];

  return (
    <div>
      <div className='justify-center text-center'>
        <h1>title</h1>
        <p>description</p>
      </div>

      {rows.map((row, index) => (
        <div key={index} className='row'>
          <h2 className='justify-center text-center mt-5'>{row.title}</h2>
          <div className='flex justify-center my-4'>
            <img
              src={row.image}
              alt='Calendar'
              width={400} // Запазете тези стойности за по-малки екрани
              height={400} // Запазете тези стойности за по-малки екрани
              className='w-96 h-96 lg:w-[500px] lg:h-[500px]' // Добавете класове за големи екрани
            />
          </div>
          <p className='justify-center text-center'>{row.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ControllBook;
