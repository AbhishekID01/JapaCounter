import React from 'react'
import WhiteLogo from '../assets/WhiteLogo.png'
import BlackLogo from '../assets/BlackLogo.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {

  const navLinks = [
  { name: "Home", href: "/" },
  { name: "Beads Types", href: "/" },
  { name: "About", href: "/About" },
];
const socialLinks = [
    { icon: <FaFacebook />, href: "https://facebook.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
  ];


  
  return (
    <div className='h-fit w-full bg-[#ed6842] flex flex-col sm:flex-row p-2 font-marcellus'>
      <div className="img h-full w-full sm:w-1/2">
        <img
          src={BlackLogo}
          alt="Logo"
          className='h-35 pt-5 sm:h-60 object-cover '
        />
        <p className='sm:px-7 w-full px-4 text-sm text-[#2d2d2d] md:w-[50%]'>
          <span className='font-bold '>MantraPath</span> is a spiritual companion designed to help you stay focused and mindful in your chanting journey.
          Track your Japa counts effortlessly with beautifully crafted digital beads and immerse yourself in peaceful devotion.
        </p>
      </div>
      <div className="info  w-1/2  flex flex-col sm:items-end py-5 px-5 ">
        <div className='flex flex-col text-lg '>
          {navLinks.map((link,index) => (
          <a key={index} href={link.href} className='text-[#2d2d2d] hover:text-white font-semibold text-3xl '>
            {link.name}
          </a>
        ))}
        </div>
        <div className="Social flex gap-7 py-5 ">
          {socialLinks.map((social, index) => (
            <a 
            key={index}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-200 text-3xl hover:text-[#2d2d2d] transition-colors duration-300'
            href={social.href}>
              {social.icon}
            </a>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Footer
