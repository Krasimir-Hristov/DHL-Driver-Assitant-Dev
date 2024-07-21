import React from 'react';
import { Link } from 'react-router-dom';

import koengenImage from '../assets/depots/depotKoengen.jpeg';

import { useTranslation } from 'react-i18next';
import TitleAndDescripion from '../components/TitleAndDescripion';
import DepotsListing from '../components/DepotsListing';

const ImportantPhones: React.FC = () => {
  const { t } = useTranslation();

  type Depots = {
    id: string;
    name: string;
    image?: string;
  };
  const depots: Depots[] = [
    { id: 'köngen', name: 'Köngen', image: koengenImage },
    { id: 'Test 1', name: 'Test 1', image: koengenImage },
    { id: 'Test 2', name: 'Test 2', image: koengenImage },
  ];

  return (
    <div className='bg-slate-200'>
      <div>
        <TitleAndDescripion
          title={t('telephonesTitle')}
          description={t('telephonesDesc')}
        />
      </div>
      <ul>
        {depots.map((depot, index) => (
          <Link to={`/phones/${depot.id}`}>
            <DepotsListing key={index} title={depot.name} image={depot.image} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ImportantPhones;
