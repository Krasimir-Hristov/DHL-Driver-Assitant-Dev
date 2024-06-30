import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  format,
  addDays,
  startOfWeek,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  getDay,
  differenceInCalendarWeeks,
} from 'date-fns';
import { enUS, bg, ro, de, ru, tr, it, hu, el, sq } from 'date-fns/locale';

const weekOffDays = [
  [], // Placeholder for 0 index
  [6], // Week 1: Saturday
  [1, 2], // Week 2: Monday, Tuesday
  [3], // Week 3: Wednesday
  [1], // Week 4: Monday
  [4], // Week 5: Thursday
  [5, 6], // Week 6: Friday, Saturday
  [1], // Week 7: Monday
  [6], // Week 8: Saturday
  [1], // Week 9: Monday
];

type Props = {
  startWeek: number;
  locale:
    | string
    | 'enUS'
    | 'bg'
    | 'ro'
    | 'de'
    | 'ru'
    | 'tr'
    | 'it'
    | 'hu'
    | 'gr'
    | 'al';
};

const locales = { enUS, bg, ro, de, ru, tr, it, hu, el, sq };
const i18nToLocaleMap: Record<Props['locale'], keyof typeof locales> = {
  enUS: 'enUS',
  bg: 'bg',
  ro: 'ro',
  de: 'de',
  ru: 'ru',
  tr: 'tr',
  it: 'it',
  hu: 'hu',
  gr: 'el',
  al: 'sq',
};

const WeeklyCalendar: React.FC<Props> = ({ startWeek, locale }) => {
  const { t } = useTranslation();

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const calculateWeekNumber = (
    startWeek: number,
    currentDate: Date,
    baseDate: Date
  ) => {
    const totalWeeks = differenceInCalendarWeeks(currentDate, baseDate, {
      weekStartsOn: 1,
    });
    return ((startWeek - 1 + totalWeeks) % 9) + 1;
  };

  const generateDates = (startWeek: number, currentMonth: Date) => {
    const baseDate = new Date(2022, 0, 1); // 1st January 2022
    const start = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 });
    const end = endOfMonth(currentMonth);
    const dates = [];
    let currentDate = start;

    while (currentDate <= end) {
      const weekNumber = calculateWeekNumber(startWeek, currentDate, baseDate);
      const dayOfWeek = getDay(currentDate);
      const offDays = weekOffDays[weekNumber] || [];
      const isOffDay = offDays.includes(dayOfWeek);
      const isSunday = dayOfWeek === 0; // Check if it's Sunday

      dates.push({
        date: currentDate,
        isOffDay,
        isSunday, // Add this property to the object
      });

      currentDate = addDays(currentDate, 1);
    }

    return dates;
  };

  const dates = generateDates(startWeek, currentMonth);

  const handlePreviousMonth = () => {
    setCurrentMonth((prev) => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  };

  return (
    <div className='max-w-md mx-auto p-4 '>
      <div className='flex justify-between mb-4'>
        <button
          onClick={handlePreviousMonth}
          className='p-2 bg-blue-500 w-24 text-white rounded'
        >
          {t('previous')}
        </button>
        <h2 className='text-lg font-bold'>
          {format(currentMonth, 'MMMM yyyy', {
            locale: locales[i18nToLocaleMap[locale]],
          })}
        </h2>
        <button
          onClick={handleNextMonth}
          className='p-1 ml-1 w-24 bg-blue-500 text-white rounded'
        >
          {t('next')}
        </button>
      </div>
      <div className='grid grid-cols-7 gap-1 sm:gap-2'>
        {dates.map(({ date, isOffDay, isSunday }, index) => (
          <div
            key={index}
            className={`p-1 sm:p-2 border text-xs sm:text-sm 
              ${
                isOffDay
                  ? 'bg-green-500'
                  : isSunday
                  ? 'bg-gray-500' // If it's Sunday, make it gray
                  : 'bg-yellow-500'
              }
            `}
          >
            {format(date, 'EEE, MMM d', {
              locale: locales[i18nToLocaleMap[locale]],
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;
