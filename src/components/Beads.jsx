import React from 'react';
import Rudrakshi from '../assets/RudraksMala.png';
import TulsiMala from '../assets/TulsiMala.png';
import Sphatic from '../assets/Sphatic.png';
import Chandan from '../assets/Chandan.png';
import Lava from '../assets/Lava.png';

const Beads = () => {
  return (
    <div className='min-h-screen bg-[#e3e0d6] pt-30 pb-10 sm:pt-50 px-4 sm:px-20 flex justify-center'>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl py-2">
        <div className='h-80 w-80 bg-white rounded-xl mx-auto rotate-[-6deg] flex flex-col items-center p-5 shadow-2xl'>
            <img src={Rudrakshi} alt="" className='h-40' />
            <p className='text-center font-semibold'>Sacred to Lord Shiva, used for chanting mantras, offering protection, health, and spiritual awakening.</p>
        </div>
        <div className='h-80 w-80 bg-white rounded-xl mx-auto rotate-[6deg] flex flex-col items-center p-5 shadow-2xl'>
            <img src={TulsiMala} alt="" className='h-40' />
            <p className='text-center font-semibold'>Sacred to Lord Vishnu, promotes devotion, purifies mind and body, and protects from negative energy.</p>
        </div>
        <div className='h-80 w-80 bg-white rounded-xl mx-auto rotate-[3deg] flex flex-col items-center p-5 shadow-2xl'>
            <img src={Sphatic} alt="" className='h-40' />
            <p className='text-center font-semibold'>Enhances clarity, peace, and concentration; cools the mind and body, used in goddess worship and healing.</p>
        </div>
        <div className='h-80 w-80 bg-white rounded-xl mx-auto rotate-[-6deg] flex flex-col items-center p-5 shadow-2xl'>
            <img src={Chandan} alt="" className='h-40' />
            <p className='text-center font-semibold'>Brings calmness, enhances focus and spiritual vibrations; used in meditation, prayer, and promoting serenity.</p>
        </div>
        <div className='h-80 w-80 bg-white rounded-xl mx-auto rotate-[12deg] flex flex-col items-center p-5 shadow-2xl'>
            <img src={Lava} alt="" className='h-40' />
            <p className='text-center font-semibold'>Grounding energy, helps in calming emotions, stress relief, and connecting with Earth’s energy.</p>
        </div>
      </div>
    </div>
  );
};

export default Beads;
