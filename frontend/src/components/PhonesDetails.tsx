import React from 'react';
import { useParams } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

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

const depotsTelephones: { [key: string]: Depot } = {
  köngen: {
    title: 'Depo Köngen',
    description: 'Robert-Bosch-Str. 20 73257 Köngen',
    telephones: [
      {
        name: 'Главен офис',
        number: '+49 123 456 7890',
        info: 'Звънете на този номер за общи въпроси.',
      },
      {
        name: 'Спешен',
        number: '+49 123 456 7891',
        info: 'Звънете на този номер само при спешни случаи.',
      },
    ],
  },
  waiblingen: {
    title: 'Склад 2',
    description: 'Това е описанието за Склад 2.',
    telephones: [
      {
        name: 'Главен офис',
        number: '+49 987 654 3210',
        info: 'Звънете на този номер за общи въпроси.',
      },
      {
        name: 'Спешен',
        number: '+49 987 654 3211',
        info: 'Звънете на този номер само при спешни случаи.',
      },
    ],
  },
  kircheim: {
    title: 'Склад 3',
    description: 'Това е описанието за Склад 3.',
    telephones: [
      {
        name: 'Главен офис',
        number: '+49 555 666 7777',
        info: 'Звънете на този номер за общи въпроси.',
      },
      {
        name: 'Спешен',
        number: '+49 555 666 7778',
        info: 'Звънете на този номер само при спешни случаи.',
      },
    ],
  },
};

const PhonesDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const depot = depotsTelephones[id as keyof typeof depotsTelephones];

  if (!id || !depot) {
    return <p>Складът не е намерен.</p>;
  }

  return (
    <div>
      <h1>{depot.title}</h1>
      <p>{depot.description}</p>
      <ul>
        {depot.telephones.map((phone, index) => (
          <li key={index}>
            <h2>{phone.name}</h2>
            <p>Номер: {phone.number}</p>
            <p>Информация: {phone.info}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhonesDetails;
