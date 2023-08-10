import React, { useEffect } from 'react';
import Navbar from './components/Navbar2';
import './index.css';
import Footer from './components/Footer';
import SchedListing from './components/SchedListing';

const ReminderPage = () => {
  const pageStyle = {
    backgroundColor: '#F2F2F2',
    minHeight: '100vh',
  };

  useEffect(() => {
    document.body.style.backgroundColor = pageStyle.backgroundColor;

    // Clean up the style when the component unmounts
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [pageStyle.backgroundColor]);

  return (
    <div style={pageStyle}>
      <div>
        <Navbar />
      </div>
      <div className="flex items-center justify-center mt-8">
        <SchedListing />
      </div>
      <div className='mt-20'>
        <Footer />
      </div>
    </div>
  );
};

export default ReminderPage;
