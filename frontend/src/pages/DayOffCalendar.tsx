import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import WeeklyCalendar from '../components/WeeklyCalendar';

const DayOffCalendar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [startWeek, setStartWeek] = useState<number>(1); // Използваме 1 като стойност по подразбиране

  return (
    <>
      <div className='bg-slate-200'>
        <h1 className='text-red-800 font-extrabold bg-yellow-500 justify-center text-center uppercase py-4 text-4xl  decoration-red-800  md:text-6xl'>
          {t('dayOffCalendar')}
        </h1>

        <div className='justify-center text-center mx-3 '>
          <h2 className='text-red-800 font-extrabold  uppercase py-4 text-3xl  decoration-red-800'>
            Коя е моята група?
          </h2>

          <p className='font-extrabold text-2xl'>
            Намирането на вашата група изисква да имате работен график за
            месеца, предоставен от вашият работодател (
            <span className='text-red-800 bg-yellow-500 font-extrabold rounded'>
              DHL
            </span>
            ). След това трябва да сменяте групите в приложението (от 1 до 9),
            като съпоставяте почивните дни във вашата календарна система с тези
            в календара по-долу. Когато почивните дни съвпаднат, това е вашата
            група.
          </p>

          <div className='mt-10 border-8 border-black bg-yellow-500'>
            <h3 className='font-extrabold text-red-800 text-3xl uppercase'>
              Важно!!!
            </h3>
            <p className='font-extrabold text2xl'>
              След като разберете коя е вашата група, важно е да запомните, че
              тя <span>НИКОГА</span> не се променя. Можете винаги да я въведете
              отново в календара, за да видите вашите почивни дни без да я
              търсите отново.
            </p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center min-h-screen text-center px-4 pt-12 md:pt-0 bg-slate-200'>
          <div className='mt-5 border-black p-2 border-8'>
            <h1 className='font-bold text-2xl md:text-4xl border-b-4 border-red-500 pb-2'>
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
      </div>
    </>
  );
};

export default DayOffCalendar;
