import React, { useState } from 'react';
import'./hamburgers.css';


const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mr-9'>
    <button
      className={`hamburger ${isOpen ? 'open' : ''}`}
      type ="button"
      onClick={handleToggle}
    >
      <span className="hamburger-line" />
      <span className="hamburger-line" />
      <span className="hamburger-line" />
    </button>

    </div>
  );
};

export default HamburgerButton;
