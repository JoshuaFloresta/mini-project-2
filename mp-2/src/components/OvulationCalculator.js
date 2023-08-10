import { useState } from 'react';
import { format, addDays, subDays } from 'date-fns';
import { HiHome } from 'react-icons/hi';
import { Breadcrumb, Button } from 'flowbite-react';
import './input.css';
import {
  AiOutlinePushpin,
} from "react-icons/ai";

function OvulationCalculator() {
  const [cycleLength, setCycleLength] = useState('');
  const [startDate, setStartDate] = useState('');
  const [ovulationDate, setOvulationDate] = useState('');
  const [fertileWindow, setFertileWindow] = useState('');

  const calculateOvulation = () => {
    if (cycleLength && startDate) {
      const formattedStartDate = new Date(startDate);
      const averageCycleLength = parseInt(cycleLength, 10);

      const estimatedOvulationDate = addDays(formattedStartDate, averageCycleLength - 14);
      const estimatedFertileWindowStart = subDays(estimatedOvulationDate, 4);
      const estimatedFertileWindowEnd = addDays(estimatedOvulationDate, 4);

      setOvulationDate(format(estimatedOvulationDate, 'MMMM d, yyyy'));
      setFertileWindow(
        `${format(estimatedFertileWindowStart, 'MMMM d, yyyy')} - ${format(
          estimatedFertileWindowEnd,
          'MMMM d, yyyy'
        )}`
      );
    }
  };

  return (
    <section>
      <div className='p-10'>
        <div className='banner_container mt-2'>
          <nav className='breadcrumbs'>
            <Breadcrumb>
              <Breadcrumb.Item href="/" icon={HiHome}>
                <p>Home</p>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">Calculator</Breadcrumb.Item>
            </Breadcrumb>
          </nav>
          <div className='banner_content'>
            <h1 className='text-3xl font-bold mb-4 mt-2'>Ovulation Calculator</h1>
            <p className='text-gray-600'>
              Knowing when you’re ovulating helps you work out when you could get pregnant. Discover when your fertile
              window is with Flo’s easy-to-use ovulation calculator.
            </p>
          </div>
          <br />
          <section className='ovuCalc_container'>
            <div className='ovuCalc_content'>
              <div className='p-5 border rounded-lg'>
                <div className='flex flex-col md:flex-row align-middle gap-10'>
                  <div className='w-full md:w-1/2 justify-center order-2 md:order-1'>
                    <label className='label'>Starting Date:</label>
                    <input
                      className='px-3 py-2 rounded dateInput'
                      type='date'
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div className='w-full md:w-1/2 justify-center order-1 md:order-2'>
                    <label className='label'>Average Cycle Length </label>
                    <input
                      className='px-3 py-2 rounded dateInput'
                      type='number'
                      min='21'
                      max='35'
                      placeholder='21-34'
                      value={cycleLength}
                      onChange={(e) => setCycleLength(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='mt-6'>
                <Button pill gradientMonochrome='purple' onClick={calculateOvulation}>
                  Calculate
                </Button>
              </div>
              {(ovulationDate || fertileWindow) && (
                <div className='mt-6'>
                  <div className='result-block  grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    {ovulationDate && (
                      <div className='result-item'>
                        <p className='result-label mr-5 '>Your estimated Ovulation date:</p>
                        <p className='result-value'><span className='flex items-center'><AiOutlinePushpin className='text-blue-500'/>{ovulationDate}</span></p>
                      </div>
                    )}
                    {fertileWindow && (
                      <div className='result-item'>
                        <p className='result-label'>Your estimated Fertile window:</p>
                        <p className='result-value'><span className='flex items-center'><AiOutlinePushpin className='text-red-500'/>{fertileWindow}</span></p>
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

export default OvulationCalculator;
