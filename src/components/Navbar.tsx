"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
export default function Navbar() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };
  return (
    <nav className={`fixed left-0 top-0 z-50 w-18 h-screen bg-[#030303] p-4 flex flex-col items-center transition-transform duration-800 ease-out ${
      isVisible ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="mb-12 mt-12">
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={150} 
          height={150}
          className="object-contain transform rotate-90"
          onClick={() => scrollToSection('home')}
        />
      </div>
      <ul className="space-y-6 flex flex-col items-center">
        <li>
          <button 
            onClick={() => scrollToSection('about')}
            className={`${activeSection === 'about' ? 'bg-white text-black' : 'text-[#7a7a7a] hover:text-gray-300 hover:bg-gray-800/50'} block py-6 px-4 transform rotate-90 whitespace-nowrap font-bold cursor-pointer transition-all duration-300 ease-in-out`}
          >
            A propos
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('projets')}
            className={`${activeSection === 'projets' ? 'bg-white text-black' : 'text-[#7a7a7a] hover:text-gray-300 hover:bg-gray-800/50'} block py-6 px-4 transform rotate-90 whitespace-nowrap font-bold cursor-pointer transition-all duration-300 ease-in-out`}
          >
            Exp.
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('certifs')}
            className={`${activeSection === 'certifs' ? 'bg-white text-black' : 'text-[#7a7a7a] hover:text-gray-300 hover:bg-gray-800/50'} block py-6 px-4 transform rotate-90 whitespace-nowrap font-bold cursor-pointer transition-all duration-300 ease-in-out`}
          >
            Certifs.
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`${activeSection === 'contact' ? 'bg-white text-black' : 'text-[#7a7a7a] hover:text-gray-300 hover:bg-gray-800/50'} block py-6 px-4 transform rotate-90 whitespace-nowrap font-bold cursor-pointer transition-all duration-300 ease-in-out`}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}