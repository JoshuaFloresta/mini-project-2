import React from 'react';
import Navbar from './components/Navbar';
import './index.css'
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className='w-3/5 text-center '>
        <h1 className='text-6xl font-bold'>Understand your body alongside your cycle with Flo.</h1>
        <p className='text-lg font-normal mt-10 w-2/3 mx-auto text'>
        If you want to know more about your body and how your cycle can affect everything from your mood to your energy levels, tracking your periods and ovulation is a great place to start.
      </p>
        </div>
    </div>
    <div className="flex items-center justify-center h-screen bg-gray-50">
        <h1>The #1 period and ovulation tracker worldwide</h1>
    </div>
    <BlogSection/>
     <Footer/>
     </div>
  );
};

export default HomePage;
