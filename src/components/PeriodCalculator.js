import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import './PeriodCalcu.css';

const CycleForm = ({ addCycle }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if (startDate && endDate) {
      addCycle(startDate, endDate);
      setStartDate('');
      setEndDate('');
    }
};

return (
    <div className="calculator_container">
        <div className="calculator_content">
            <div className="calculator_title">
                <h1>Period Calculator</h1>
                <p className='mb-10' style={{textAlign: 'center'}}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, asperiores iure itaque ut repudiandae temporibus nemo,   tenetur,  perspiciatis recusandae maiores debitis harum natus fugit? Eos!
                </p>
            </div>
            <div className='calculator_image'>
                <img src="/images/Cycle.jpg" alt="Calendar" />
            </div>
            <div className="calculator_form border rounded-lg p-4">
                <form onSubmit={handleSubmit}>
                    <div className="input_start flex max-w-md flex-col gap-3 justify-center items-center">
                        <div mb-2 block>
                            <label>Start Date:</label>
                        </div>
                        <div>
                            <input
                                className="input_start_label w-full px-3 py-2 rounded-lg shadow-lg"
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                    </div>
                     <div className="input_end flex max-w-md flex-col gap-3 justify-center items-center">
                        <div mb-2 block>
                            <label>End Date:</label>
                        </div>
                        <div>
                            <input
                                className="input_end_label w-full px-3 py-2 rounded-lg shadow-lg"
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="button_container">
                        <Button
                                onClick={handleSubmit}
                                className="btn_primary mt-8"
                                gradientMonochrome="pink"
                                pill
                                size='xl'
                                style={{ width: '100%' }}
                            >
                            Cycle Result
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

const CycleTracker = () => {
    const [cycles, setCycles] = useState([]);


const addCycle = (startDate, endDate) => {
    const cycle = { startDate, endDate };
    setCycles([...cycles, cycle]);
};

const calculateCycleDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const duration = Math.floor((end - start) / (1000 * 60 * 60 * 24));
    return duration;
};

return (
    <div className="flex justify-center items-center">
        <div className="container mx-auto">
            <CycleForm addCycle={addCycle} />
            <ul>
                {cycles.map((cycle, index) => (
                    <li key={index}>
                        <div className="result_container">
                            <div className="cycle_result">
                                <p>Start: {cycle.startDate}</p>
                                <p>End: {cycle.endDate}</p>
                            </div>
                            <div className="duration_result">
                                <p>Duration: {calculateCycleDuration(cycle.startDate, cycle.endDate)} days</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>

);
};

export default CycleTracker;
