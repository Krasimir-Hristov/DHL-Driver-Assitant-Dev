import React from 'react';

type ListingCard = {
  title: string;
  image: string;
  description: string;
};

const ListingCard: React.FC<ListingCard> = ({ title, image, description }) => {
  return (
    <div className='row'>
      <h2 className='justify-center text-center mt-5 text-3xl font-extrabold bg-yellow-500 text-red-800 p-2 uppercase'>
        {title}
      </h2>
      <div className='flex justify-center my-4'>
        <img
          src={image}
          alt={title}
          width={400} // Запазете тези стойности за по-малки екрани
          height={400} // Запазете тези стойности за по-малки екрани
          className='w-96 h-96 lg:w-[500px] lg:h-[500px]' // Добавете класове за големи екрани
        />
      </div>
      <p className='justify-center text-center text-2xl font-bold'>
        {description}
      </p>
      <hr className='border-t border-gray-400 mx-4 my-4' />
    </div>
  );
};

export default ListingCard;
