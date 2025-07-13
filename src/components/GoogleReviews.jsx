import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const GoogleReviews = () => {
  useEffect(() => {
    // Load the Google Reviews Widget scrip
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-forum text-primary-text text-center mb-8">
        What Our Guests Say
      </h2>
      <div className="elfsight-app-89047668-f30d-432c-9b53-00d0ad79621b" data-elfsight-app-lazy></div>

      <div className='absolute bottom-14 z-30 left-[0px] flex justify-center bg-primary-bg w-full h-24'>
        <NavLink to='https://g.page/r/CVIG15mQNjy_EBM/review' target='_blank' className='cursor-pointer mt-3 font-forum bg-primary-bg text-primary-text hover:bg-primary-text hover:text-primary-bg border-2 h-12 flex justify-center items-center px-4 rounded-lg border-primary-text'>
          Add You Review
        </NavLink>
      </div>
    </div>
  );
};


export default GoogleReviews;
