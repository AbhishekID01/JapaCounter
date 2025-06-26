import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Rudrakshi from '../assets/RudraksMala.png';
import TulsiMala from '../assets/TulsiMala.png';
import Sphatic from '../assets/Sphatic.png';
import Chandan from '../assets/Chandan.png';
import Lava from '../assets/Lava.png';
import Person from '../assets/Person.png';

const Home = ({ onSubmit }) => {
  const [Mala, setMala] = useState('');
  const [ballType, setBallType] = useState('circle');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const options = [
    { value: 'rudraksha', label: 'Rudrakshi', img: Rudrakshi },
    { value: 'tulsi', label: 'Tulsi Mala', img: TulsiMala },
    { value: 'sphatic', label: 'Sphatic', img: Sphatic },
    { value: 'chandan', label: 'Chandan', img: Chandan },
    { value: 'lava', label: 'Lava', img: Lava },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Mala || isNaN(Mala) || parseInt(Mala) <= 0) {
      setError('Please enter a valid positive number');
      return;
    }

    onSubmit({
      malaCount: Mala,
      ballType: ballType,
    });

    setError('');
    setMala('');
    navigate('/japa'); 
  };

  return (
    <div className='min-h-screen w-full bg-[#e3e0d6] font-marcellus sm:flex ' >
      <div className='sm:w-1/2 sm:h-full flex items-center flex-col'>
        <h1 className='text-center pt-30 text-5xl font-extrabold bg-gradient-to-b from-gray-700 to-black bg-clip-text text-transparent font-marcellus'>Chant. Count. Connect.</h1>
        <h3 className='text-center font-bold pt-8 text-lg'>"Wear headphones for a better experience."</h3>
        <img src={Person} alt="" className='hidden sm:block' />
      </div>
      <div className='sm:w-1/2 sm:h-full sm:pt-30'>
        <form onSubmit={handleSubmit} className='mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg max-w-md '>
        <label htmlFor="balls" className='block mb-2 text-gray-700'>Enter beads (Mala count)</label>
        <input
          type="number"
          id="balls"
          placeholder="Enter total number"
          value={Mala}
          onChange={(e) => setMala(e.target.value)}
          className='w-full p-2 border rounded mb-2'
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <label className="block mb-2 mt-4 text-gray-700">Select beads Type</label>
        <div className="border rounded-2xl overflow-hidden">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => setBallType(opt.value)}
              className={`flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                ballType === opt.value ? 'bg-orange-100' : ''
              }`}
            >
              <img src={opt.img} alt={opt.label} className="w-8 h-8 rounded-full" />
              <span>{opt.label}</span>
            </div>
          ))}
        </div>

        <button type="submit" className="mt-4 w-full bg-[#2d2d2d] text-white py-2 rounded-xl hover:bg-black cursor-pointer transition">
          Start
        </button>
      </form>
      </div>
    </div>
  );
};

export default Home;
