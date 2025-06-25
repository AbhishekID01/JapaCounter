import React, { useState } from 'react'
import WhiteLogo from '../assets/WhiteLogo.png'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      style={{ fontFamily: 'Gloock' }}
      className=" h-30 relative bg-gradient-to-b from-[#2b5876] to-[#4e4376] w-[80%]  shadow-lg px-6 py-4 flex items-center justify-between "
    >

      <div className="logo sm:w-[50%]">
        <img src={WhiteLogo} alt="Logo" className="h-[120px] sm:h-[150px] object-contain" />
      </div>


      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white" size={28} /> : <Menu className="text-white" size={28} />}
        </button>
      </div>


      <ul className="hidden md:flex gap-10 text-white font-light">
        {['Home', 'Breeds Types', 'About'].map((item) => (
          <li
            key={item}
            className="cursor-pointer relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
          >
            {item}
          </li>
        ))}
      </ul>

      <button className="hidden md:block text-black font-light text-sm shadow-lg bg-white px-4 py-2 rounded-2xl cursor-pointer">
        Contact us
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-b from-[#4e4376] to-[#2b5876] flex flex-col items-start gap-4 px-6 py-4 text-white font-light md:hidden z-40">
          <li className="list-none">Home</li>
          <li className="list-none">Breeds Types</li>
          <li className="list-none">About</li>
          <button className="text-black bg-white rounded-2xl px-4 py-2">Contact us</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
