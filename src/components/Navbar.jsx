import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import BlackLogo from '../assets/BlackLogo.png'
import WhiteLogo from '../assets/WhiteLogo.png'
import { Link } from 'react-router-dom';




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Beads Type', path: '/Beads' },
    { name: 'About', path: '/About' }
  ]

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[80%] bg-[#2d2d2d] backdrop-blur-sm rounded-full px-6 py-3 shadow-md flex justify-between items-center font-marcellus">


      <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-100">
        {navItems.map((item, i) => (
          <li
            key={i}>
            <Link
              to={item.path}
              className="hover:underline underline-offset-4 cursor-pointer transition-all duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>


      <h1 className="text-lg font-bold tracking-wide  md:block">
        <img src={WhiteLogo} alt="" className='h-15' />
      </h1>


      <div className="md:hidden text-gray-100">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-lg shadow-md p-4 flex flex-col gap-3 text-gray-800 font-medium md:hidden">
          {navItems.map((item, i) => (
            <li key={i} className="list-none">
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="hover:underline cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
