import React from 'react';

type TitleAndDescripion = {
  title: string;
  description: string;
};

const TitleAndDescripion: React.FC<TitleAndDescripion> = ({
  title,
  description,
}) => {
  return (
    <div className='justify-center text-center'>
      <h1 className='text-red-800 font-extrabold  justify-center text-center uppercase py-4 text-2xl  decoration-red-800  md:text-6xl'>
        {title}
      </h1>
      <p className='text-lg  text-center justify-center font-bold mx-4 my-2'>
        {description}
      </p>
      <hr className='border-t border-gray-400 mx-4 my-4' />
    </div>
  );
};

export default TitleAndDescripion;
