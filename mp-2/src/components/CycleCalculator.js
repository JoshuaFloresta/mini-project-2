import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import { Button } from 'flowbite-react';
import { AiOutlinePushpin } from 'react-icons/ai';

function CycleCalendar() {
  const [lastPeriodStart, setLastPeriodStart] = useState('');
  const [periodDuration, setPeriodDuration] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [menstruationStart, setMenstruationStart] = useState('');
  const [menstruationEnd, setMenstruationEnd] = useState('');

  const calculateMenstruation = () => {
    if (lastPeriodStart && periodDuration && cycleLength) {
      const formattedLastPeriodStart = new Date(lastPeriodStart);
      const averageCycleLength = parseInt(cycleLength, 10);
      const estimatedMenstruationStart = formattedLastPeriodStart;
      const estimatedMenstruationEnd = addDays(estimatedMenstruationStart, parseInt(periodDuration, 10));

      setMenstruationStart(format(estimatedMenstruationStart, 'MMMM d, yyyy'));
      setMenstruationEnd(format(estimatedMenstruationEnd, 'MMMM d, yyyy'));
    }
  };

  return (
    <section>
      <div className='p-10 -mt-12'>
        <div className='banner_container '>
          <nav className='breadcrumbs'>
          </nav>
          <div className='banner_content'>
            <h1 className='text-3xl font-bold mb-4 mt-2'>Cycle Calendar</h1>
            <p className='text-gray-600'>
              Track your menstrual cycle and predict your menstruation start and end dates with this cycle calendar.
            </p>
          </div>
          <br />
          <section className='cycleCalc_container'>
            <div className='cycleCalc_content align-middle'>
              <div className='p-5 border rounded-lg'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                  <div>
                    <label className='label'>Start of your last period?</label>
                    <input
                      className='px-3 py-2 rounded cycleInput'
                      type='date'
                      value={lastPeriodStart}
                      onChange={(e) => setLastPeriodStart(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className='label'>How many days did it last?</label>
                    <input
                      className='px-3 py-2 rounded cycleInput'
                      type='number'
                      min='1'
                      value={periodDuration}
                      onChange={(e) => setPeriodDuration(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className='label'>Average cycle length (days) </label>
                    <input
                      className='px-3 py-2 rounded cycleInput'
                      type='number'
                      min='21'
                      max='36'
                      value={cycleLength}
                      onChange={(e) => setCycleLength(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='mt-6'>
                <Button pill gradientMonochrome='purple' onClick={calculateMenstruation}>
                  Calculate
                </Button>
              </div>
              {(menstruationStart || menstruationEnd) && (
                <div className='mt-6'>
                  <div className='result-block  grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    {menstruationStart && (
                      <div className='result-item'>
                        <p className='result-label'>Estimated Menstruation Start:</p>
                        <p className='result-value'>
                          <span className='flex items-center'>
                            <AiOutlinePushpin className='text-blue-500' />
                            {menstruationStart}
                          </span>
                        </p>
                      </div>
                    )}
                    {menstruationEnd && (
                      <div className='result-item '>
                        <p className='result-label'>Estimated Menstruation End:</p>
                        <p className='result-value'>
                          <span className='flex items-center'>
                            <AiOutlinePushpin className='text-red-500' />
                            {menstruationEnd}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default CycleCalendar;
