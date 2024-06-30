import React from 'react';
import { useTranslation } from 'react-i18next';

const DateRange: React.FC = () => {
  const { t } = useTranslation();

  const now = new Date();
  const twentyEightDaysAgo = new Date(now.getTime() - 28 * 24 * 60 * 60 * 1000);

  const formatDate = (date: Date) => {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  };

  return (
    <div className='text-2xl mt-5 flex flex-col'>
      <span className='font-semibold'>{t('datesNeeded')}:</span>
      <span className='font-extrabold'>
        {formatDate(twentyEightDaysAgo)} - {formatDate(now)}
      </span>
    </div>
  );
};

export default DateRange;
