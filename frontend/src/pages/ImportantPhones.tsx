import React from 'react';
import { Link } from 'react-router-dom';

import koengenImage from '../assets/depots/depotKoengen.jpeg';
import waiblingenImage from '../assets/depots/depotWaiblingen.jpeg';

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
    { id: 'waiblingen', name: 'waiblingen', image: waiblingenImage },
    { id: 'kircheim', name: 'kircheim', image: koengenImage },
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
          <li key={index}>
            <Link to={`/phones/${depot.id}`}>
              <DepotsListing title={depot.name} image={depot.image} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImportantPhones;
