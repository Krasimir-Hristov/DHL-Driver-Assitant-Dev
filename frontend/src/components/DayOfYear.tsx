import React from 'react';
import { useTranslation } from 'react-i18next';

const DayOfYear: React.FC = () => {
  const { t } = useTranslation();

  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);

  return (
    <div className='text-2xl'>
      <span className='font-semibold'>{t('dayOfYear')}:</span>{' '}
      <span className='font-extrabold'>{day}</span>
    </div>
  );
};

export default DayOfYear;
