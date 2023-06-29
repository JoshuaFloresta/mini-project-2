import { useState } from 'react';
import { format, addDays, subDays } from 'date-fns';

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
    <div>
      <h1>Ovulation Calculator</h1>
      <label>
        Average Cycle Length (20 to 35 days):
        <input
          type="number"
          min="20"
          max="35"
          value={cycleLength}
          onChange={(e) => setCycleLength(e.target.value)}
        />
      </label>
      <br />
      <label>
        Starting Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateOvulation}>Calculate</button>
      <br />
      {ovulationDate && <p>Your estimated ovulation date: {ovulationDate}</p>}
      {fertileWindow && <p>Your estimated fertile window: {fertileWindow}</p>}
    </div>
  );
}

export default OvulationCalculator;
