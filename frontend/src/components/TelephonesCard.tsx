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
    <div className='bg-gray-100 rounded-lg p-4 shadow-md m-2'>
      <h2 className='text-xl font-semibold text-gray-800'>{name}</h2>
      {/* Using "tel:" protocol to enable direct dialing on click from mobile devices */}
      <a
        href={`tel:${number}`}
        className='block text-blue-500 hover:text-blue-700 font-bold my-2'
      >
        {number}
      </a>
      <p className='text-gray-600'>{info}</p>
    </div>
  );
};

export default TelephonesCard;
