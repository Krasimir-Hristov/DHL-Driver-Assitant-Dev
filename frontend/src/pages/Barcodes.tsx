import React from 'react';

import { useTranslation } from 'react-i18next';

import abruch from '../assets/barcodes/abruch.jpg';
import firmaClose from '../assets/barcodes/firmaClose.jpg';
import give from '../assets/barcodes/give.jpg';
import lagern from '../assets/barcodes/lagern.jpg';
import streetClose from '../assets/barcodes/streetclose.jpg';
import ListingCard from '../components/ListingCard';
import TitleAndDescripion from '../components/TitleAndDescripion';

const Barcodes: React.FC = () => {
  const { t } = useTranslation();

  const barcodesInfo = [
    {
      title: `${t('cancelTitle')}`,
      image: abruch,
      description: `${t('cancelDesc')}`,
    },
    {
      title: `${t('isCloseTitle')}`,
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
    <div className='bg-slate-200'>
      <div>
        <TitleAndDescripion
          title={t('barcodesTitle')}
          description={t('barcodesDesc')}
        />
      </div>
      {barcodesInfo.map((row, index) => (
        <div>
          <ListingCard
            key={index}
            title={row.title}
            image={row.image}
            description={row.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Barcodes;
