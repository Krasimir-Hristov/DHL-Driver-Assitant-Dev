import React from 'react';

type DepotsListingProps = {
  title: string;
  image: string | undefined;
};

const DepotsListing: React.FC<DepotsListingProps> = ({ title, image }) => {
  return (
    <div className='row'>
      <h2 className='justify-center text-center mt-5 text-3xl font-extrabold bg-yellow-500 text-red-800 p-2 uppercase'>
        {title}
      </h2>
      <div className='flex justify-center my-4'>
        {image && (
          <img
            src={image}
            alt={title}
            width={400} // Keep these values for smaller screens
            height={400} // Keep these values for smaller screens
            className='w-96 h-96 lg:w-[500px] lg:h-[500px]' // Add classes for larger screens
          />
        )}
      </div>
      <hr className='border-t border-gray-400 mx-4 my-4' />
    </div>
  );
};

export default DepotsListing;
