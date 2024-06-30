import React, { useState } from 'react';
import DayOfYear from '../components/DayOfYear';
import CurrentDate from '../components/CurrentDate';
import { useTranslation } from 'react-i18next';
import DateRange from '../components/DateRange';
import WeeklyCalendar from '../components/WeeklyCalendar';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [startWeek, setStartWeek] = useState<number>(1); // Използваме 1 като стойност по подразбиране

  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center px-4 pt-12 md:pt-0 bg-slate-200'>
      <h1 className='text-3xl md:text-4xl lg:text-6xl mb-8 font-bold'>
        {t('controlBookInfo')}
      </h1>
      <DayOfYear />
      <CurrentDate />
      <DateRange />
      <div className='mt-5 border-black p-2 border-8'>
        <h1 className='font-bold text-2xl md:text-4xl border-b-4 border-red-500 pb-2'>
          {' '}
          {t('checkDayOff')}
        </h1>
        <h2 className='text-xl font-bold mt-5  '>{t('choseGroup')}</h2>
        <div className='flex flex-row p-3 justify-center items-center mt-4 gap-3 border-b-4 border-yellow-500  md:gap-5 font-semibold'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((week) => (
            <p
              key={week}
              onClick={() => setStartWeek(week)}
              className={`p-1 md:p-2 border-2 border-black rounded-md cursor-pointer ${
                startWeek === week ? 'bg-green-500' : 'bg-white'
              }`}
              style={{ minWidth: '1.5rem', textAlign: 'center' }}
            >
              {week}
            </p>
          ))}
        </div>

        <WeeklyCalendar startWeek={startWeek} locale={i18n.language} />
      </div>
    </div>
  );
};

export default Home;
