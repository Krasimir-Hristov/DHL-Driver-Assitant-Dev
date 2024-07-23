import React from 'react';

interface TelephoneCardProps {
  name: string;
  number: string;
  info: string;
}

const TelephonesCard: React.FC<TelephoneCardProps> = ({
  name,
  number,
  info,
}) => {
  return (
    <div className='bg-gray-200 rounded-lg text-center p-4 shadow-md m-2'>
      <h2 className='text-xl font-bold bg-yellow-400 text-red-800 '>{name}</h2>
      <a
        href={`tel:${number}`}
        className='block text-blue-500 hover:text-blue-700 text-xl font-bold my-2'
      >
        {number}
      </a>
      <p className='text-black font-bold'>{info}</p>
    </div>
  );
};

export default TelephonesCard;
