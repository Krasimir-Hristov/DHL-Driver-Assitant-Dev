import React from 'react';
import { Link } from 'react-router-dom';

import { depots } from '../constants';
import { useTranslation } from 'react-i18next';
import TitleAndDescripion from '../components/TitleAndDescripion';

const ImportantPhones: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='bg-slate-200'>
      <div>
        <TitleAndDescripion
          title={t('telephonesTitle')}
          description={t('telephonesDesc')}
        />
      </div>
    </div>
  );
};

export default ImportantPhones;
