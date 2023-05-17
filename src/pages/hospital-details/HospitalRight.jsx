import React from 'react';

// slick slider 
import "../../assets/plugins/slick/slick.css"; 
import "../../assets/plugins/slick/slick.theme.css";

export default function HospitalDetails({ gallery }) {

  return (
    <>
      <div className="travel-tips-box p-4 mb-4 mb-md-5">
        <h4 className='text-center text-white'>Travel Tips</h4>
        <ul className='ms-3'>
          <li>Do your research</li>
          <li>Don’t draw attention</li>
          <li>Make copies of important documents</li>
          <li>Keep your friends and family updated</li>
          <li>Be wary of public Wi-Fi</li>
          <li>Safeguard your hotel room</li>
          <li>Be aware of your surroundings</li>
        </ul>
      </div>
    </>
  )
}
