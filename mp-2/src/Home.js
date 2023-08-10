import React from 'react';
import Navbar from './components/Navbar';
import './index.css'
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';
import  TrackCycle from './images/TrackCycle.png'
import Ovulate from './images/Ovulate.png'
import Symptoms from'./images/Symptoms.png'
import Notification from './images/Notification.png'


const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex items-center justify-center bg-white mt-52 pb-48">
        <div className='w-4/5 text-center lg:w-2/3'>
        <h1 className='lg:text-6xl md:text-4xl text-3xl font-bold'>Discover the intricate connection between you and your cycle with Femi</h1>
        <p className='lg:text-lg md:text-md font-normal mt-10 '>
     Femi is your ultimate all-in-one solution for proactive feminine health management. Designed to empower and enhance your well-being, FemiCare goes beyond mere tracking to provide personalized insights and guidance tailored to your unique body and lifestyle.
      </p>
        </div>
    </div>

    <div className=" bg-gray-50 mx-auto py-8 border-y border-gray-300">
  <div className="lg:w-2/3 w-5/6 flex flex-col md:flex-row items-center mx-auto my-10">
    <div className="mt-4 text-start">
      <h1 className="font-bold text-3xl sm:text-4xl mb-4 lg:w-4/5">Track your cycle</h1>
      <div>
        <p className="text-lg lg:text-xl">
          Effortlessly monitor your menstrual cycle, access upcoming cycles, and gain insights into your fertile days. Enhance your preparedness and knowledge about your body's signals with personalized guidance.
        </p>
      </div>
    </div>
    <div className="mt-4 sm:mt-0">
      <img src={TrackCycle} alt="" className="z-10" style={{ width: '100%', maxWidth: '900px' }} />
    </div>
  </div>

  <div className="w-5/6  lg:w-2/3 flex flex-col md:flex-row items-center mx-auto my-10">
    <div className="mt-4  md:ms-3 md:order-2 text-start">
      <h1 className="font-bold text-3xl sm:text-4xl mb-4  ">Know when your period starts and when you ovulate</h1>
      <div>
        <p className="text-lg lg:text-xl">
        With Femi's Artificial Intelligence engine, effortlessly monitor your menstrual cycle, access future cycle predictions, and gain insights into your fertile days. Receive daily notifications regarding expected symptoms, ensuring you feel well-prepared for each phase.
        </p>
      </div>
    </div>

    <div className="mt-4 md:mt-0 md:order-1">
      <img src={Ovulate} alt="" className="z-10" style={{ width: '100%', maxWidth: '900px' }} />
    </div>
  </div>


  <div className="w-5/6  lg:w-2/3 flex flex-col md:flex-row items-center mx-auto my-10">
    <div className="mt-4 text-start">
      <h1 className="font-bold text-3xl sm:text-4xl mb-4 w-4/5">Track your cycle</h1>
      <div>
        <p className="text-lg sm:text-xl">
        Utilize Femi to monitor over 70 diverse symptoms, obtaining precise predictions for both your menstrual cycle and associated symptoms. This empowers you to plan self-care activities during low-energy days and stay prepared for the onset of cramps.
        </p>
      </div>
    </div>
    <div className="mt-4 sm:mt-0">
      <img src={Symptoms} alt="" className="z-10" style={{ width: '100%', maxWidth: '900px' }} />
    </div>
  </div>

  <div className="w-5/6  lg:w-2/3 flex flex-col md:flex-row items-center mx-auto my-10">
    <div className="mt-4 text-start  md:ms-3 md:order-2">
      <h1 className="font-bold text-3xl sm:text-4xl mb-4 w-4/5">Know when your period starts and when you ovulate</h1>
      <div>
        <p className="text-lg sm:text-xl">
        Set up reminders to stay informed about the start of your period and ovulation, ensuring you're always prepared. Additionally, customize notifications for various aspects such as water intake, birth control, and other important reminders.
        </p>
      </div>
    </div>

    <div className="mt-4 md:mt-0 md:order-1">
      <img src={Notification} alt="" className="z-10" style={{ width: '100%', maxWidth: '900px' }} />
    </div>
  </div>
</div>
    <BlogSection/>
    <div className='mt-20'>
    <Footer/>
    </div>
     </div>
  );
};

export default HomePage;
