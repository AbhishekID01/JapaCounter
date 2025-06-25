import React, { useState } from 'react'
import Rudrakshi from '../assets/RudraksMala.png'
import TulsiMala from '../assets/TulsiMala.png'
import Sphatic from '../assets/Sphatic.png'
import Chandan from '../assets/Chandan.png'
import Lava from '../assets/Lava.png'


const Home = ({ onSubmit }) => {
  const [Mala, setMala] = useState('')
  const [ballType, setBallType] = useState('circle')

  const options = [
    { value: "rudraksha", label: "Rudrakshi", img: Rudrakshi },
    { value: "tulsi", label: "Tulsi Mala", img: TulsiMala },
    { value: "sphatic", label: "Sphatic", img: Sphatic },
    { value: "chandan", label: "Chandan", img: Chandan },
    { value: "lava", label: "Lava", img: Lava },
  ];



  const handleSubmit = (e) => {
    e.preventDefault();
    if (Mala && parseInt(Mala) > 0) {
      onSubmit({
        malaCount: Mala,
        ballType: ballType,
      });
      setMala('');
    }
  };


  return (
    <div>
      <h1 style={{ fontFamily: 'Gloock' }} className="text-3xl">Enter Japa Goal</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="balls">Enter beads (Mala count)</label>
        <input
          type="number"
          id="balls"
          placeholder="Enter total number"
          value={Mala}
          onChange={(e) => setMala(e.target.value)}
        />

        <div className="relative w-60">
          <label className="block mb-2">Ball Style</label>
          <div className="border rounded-2xl overflow-hidden">
            {options.map((opt) => (
              <div
                key={opt.value}
                onClick={() => setBallType(opt.value)}
                className={`flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 ${ballType === opt.value ? "bg-orange-100" : ""
                  }`}
              >
                <img src={opt.img} alt={opt.label} className="w-8 h-8 rounded-full" />
                <span>{opt.label}</span>
              </div>
            ))}
          </div>
        </div>

        <button type="submit">Start</button>
      </form>
    </div>
  )
}

export default Home
