import React from 'react';

const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <div className='w-1/2 mx-auto'>
        <img src="/images/maintenance.png" alt="Maintenance" className="mb-4" />
        </div>
        <h1 className="text-4xl font-semibold mb-4">Site is on progress</h1>
        <p className="text-gray-600">We're sorry, but the site is currently undergoing maintenance. Please check back later.</p>
      </div>
    </div>
  );
};

export default MaintenancePage;
