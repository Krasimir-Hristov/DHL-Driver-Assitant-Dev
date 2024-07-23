import React from 'react';
import { useParams } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import TitleAndDescripion from './TitleAndDescripion';
import TelephonesCard from './TelephonesCard';

interface Telephone {
  name: string;
  number: string;
  info: string;
}

interface Depot {
  title: string;
  description: string;
  telephones: Telephone[];
}

const PhonesDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const depotsTelephones: { [key: string]: Depot } = {
    köngen: {
      title: 'Depo Köngen',
      description: 'Robert-Bosch-Str. 20 73257 Köngen',
      telephones: [
        {
          name: `${t('manager')}`,
          number: '+49 7024 98301 552',
          info: `${t('managerDesc')}`,
        },
        {
          name: `${t('carsManager')}`,
          number: '01605052283',
          info: `${t('carsManagerDesc')}`,
        },
        {
          name: `${t('holidayManager')}`,
          number: '01721673614',
          info: `${t('holidayManagerDesc')}`,
        },
        {
          name: `${t('technicalSupport')}`,
          number: '07024-98301-477',
          info: `${t('technicalSupportDesc')}`,
        },
        {
          name: `${t('warehouseManager')}`,
          number: '+49 123 456 7891',
          info: `${t('warehouseManagerDesc')}`,
        },
        {
          name: `${t('checkOut')}`,
          number: '+49 123 456 7891',
          info: `${t('cheOutDesc')}`,
        },
        {
          name: `${t('complaints')}`,
          number: '07024-98301-477',
          info: `${t('complaintsDesc')}`,
        },
      ],
    },
    waiblingen: {
      title: 'Depo Waiblingen',
      description: 'Това е описанието за Склад 2.',
      telephones: [
        {
          name: `${t('manager')}`,
          number: '+49 987 654 3210',
          info: 'Звънете на този номер за общи въпроси.',
        },
        {
          name: `${t('carsManager')}`,
          number: '+49 987 654 3211',
          info: `${t('carsManagerDesc')}`,
        },
        {
          name: `${t('holidayManager')}`,
          number: '+49 123 456 7891',
          info: `${t('holidayManagerDesc')}`,
        },
      ],
    },
    kircheim: {
      title: 'Depo Kircheim',
      description: 'Това е описанието за Склад 3.',
      telephones: [
        {
          name: `${t('manager')}`,
          number: '+49 555 666 7777',
          info: 'Звънете на този номер за общи въпроси.',
        },
        {
          name: `${t('carsManager')}`,
          number: '+49 555 666 7778',
          info: `${t('carsManagerDesc')}`,
        },
        {
          name: `${t('holidayManager')}`,
          number: '+49 123 456 7891',
          info: `${t('holidayManagerDesc')}`,
        },
      ],
    },
  };
  const depot = depotsTelephones[id as keyof typeof depotsTelephones];

  if (!id || !depot) {
    return <p>Складът не е намерен.</p>;
  }

  return (
    <div className='bg-slate-200'>
      <div>
        <TitleAndDescripion
          title={depot.title}
          description={depot.description}
        />
      </div>
      <ul>
        {depot.telephones.map((phone, index) => (
          <li key={index}>
            <TelephonesCard
              name={phone.name}
              number={phone.number}
              info={phone.info}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhonesDetails;
