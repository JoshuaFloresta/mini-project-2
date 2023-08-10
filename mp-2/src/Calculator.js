import React from "react";
import OvulationCalculator from "./components/OvulationCalculator";
import Navbar from "./components/Navbar2";
import CycleCalculator from './components/CycleCalculator'
import { useEffect } from "react";



const Calculator = () => {

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
        <div style={pageStyle} >
            <Navbar/>
          <div className='ovu_form bg-white w-full md:w-3/4 lg:w-3/4 mx-auto mt-5 rounded-lg shadow-2xl'>
          <OvulationCalculator/>
            <CycleCalculator/>
          </div>
        </div>
  );
};

export default Calculator;

