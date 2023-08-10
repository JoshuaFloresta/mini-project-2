import React from 'react';
import BlogSection from './components/BlogSection';
import { useState } from 'react';
import SchedCreate from './components/SchedCreate';

const AboutPage = () => {

  const [isComponentOpen, setIsComponentOpen] = useState(false);

  const handleButtonClick = () => {
    setIsComponentOpen(true);
  };
  return (
    <div>
        <div>
        <h1>About Us</h1>
      <p>This is the about page.</p>
      <button onClick={handleButtonClick}>Open Component</button>
      {isComponentOpen && <SchedCreate />}
        </div>

        <div>
            <BlogSection/>
        </div>

    </div>
  );
};

export default AboutPage;
