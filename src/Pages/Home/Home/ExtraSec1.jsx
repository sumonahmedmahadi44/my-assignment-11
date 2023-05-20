import React from 'react';

const ExtraSec1 = () => {
    return (
        <div className='my-8 '>
            <h1 className='mb-4 text-center font-extrabold text-3xl text-gray-500 border border-slate-900 border-spacing-2 bg-pink-200 rounded-2xl'>Populer Section !!!</h1>
            <div className="stats shadow w-full">
  
  <div className="bg-slate-200 p-4" >
    <div className="stat-figure text-primary ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="bg-amber-200 p-4">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="bg-indigo-200 p-4">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img className='w-16 h-16 rounded-3xl p-1 mr-2' src="https://i.ibb.co/WftRC9n/yusuf-onuk-db5-Eg-Eev-AAQ-unsplash.jpg" />
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
  
</div>
        </div>
    );
};

export default ExtraSec1;