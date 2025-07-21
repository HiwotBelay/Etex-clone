"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom" 
import { ChevronDown, Menu, X } from "lucide-react"
import image from "../assets/navbarimage.png" 

 function SiteHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [headerClass, setHeaderClass] = useState("bg-black") 

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderClass("bg-black/20 backdrop-blur-sm") 
      } else {
        setHeaderClass("bg-black") 
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <header
        className={`w-full text-white py-4 pl-5 pr-6 border-b border-gray-700 fixed top-0 z-50 transition-all duration-300 
          flex flex-col md:flex-row md:items-center md:justify-between md:min-h-[120px] ${headerClass}`}
      >
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full lg:w-auto">
          {/* Left Section: Single Combined Image */}
          <div className="flex items-center h-full w-full lg:w-auto">
            <Link to="/" className="w-full lg:w-auto flex-shrink-0">
              <img
                src={image} 
                alt="ETEX Ethiopian Tech Expo 2025 Logos and Sponsors"
                width={700}
                height={90} 
                className="object-contain h-full max-h-[90px] w-full lg:w-auto" // Adjusted max-h
              />
            </Link>
          </div>
          {/* Mobile Menu Button (Hamburger/X icon) - visible on mobile/tablet, hidden on desktop */}
          <div className="lg:hidden flex items-center flex-shrink-0 mt-2 md:mt-0 self-end">
            {" "}
            {/* Added self-end for right alignment on mobile */}
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Right Section: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex lg:flex-col lg:items-end">
          {/* Container for two rows of navigation */}
          <ul className="flex space-x-8 items-center mb-2">
            {/* Top row */}
            <li>
              <Link to="#" className="text-white transition-transform hover:scale-110 inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="text-white transition-transform hover:scale-110 inline-block">
                Agenda
              </Link>
            </li>
            <li>
              <Link to="#" className="text-white transition-transform hover:scale-110 inline-block">
                Speakers
              </Link>
            </li>
            <li>
              <Link to="#" className="text-white transition-transform hover:scale-110 whitespace-nowrap inline-block">
                Sponsors/Exhibitors
              </Link>
            </li>
            <li>
              <Link to="#" className="text-white transition-transform hover:scale-110 whitespace-nowrap inline-block">
                Call for papers
              </Link>
            </li>
          </ul>
          <ul className="flex items-center">
            {/* Bottom row for Competition */}
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-white transition-transform hover:scale-110 inline-block"
              >
                Competition <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg text-left z-10 min-w-[120px] text-white">
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer whitespace-nowrap">
                    AI and Robotic Competition
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Navigation Menu (Slide-down box) */}
      <div
        className={`${mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-300 ease-in-out lg:hidden fixed top-[120px] left-0 w-full bg-black/60 p-4 border-b border-gray-700`}
      >
        <div className="flex flex-col items-start space-y-4">
          {/* Close button for mobile menu */}
          <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-white focus:outline-none">
            <X className="h-6 w-6" />
          </button>
          {/* Mobile navigation links */}
          <ul className="flex flex-col space-y-4 items-start w-full">
            <li>
              <Link
                to="#"
                className="text-white text-lg transition-transform hover:scale-110 inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-white text-lg transition-transform hover:scale-110 inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Agenda
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-white text-lg transition-transform hover:scale-110 inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-white text-lg transition-transform hover:scale-110 whitespace-nowrap inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sponsors/Exhibitors
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-white text-lg transition-transform hover:scale-110 whitespace-nowrap inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Call for papers
              </Link>
            </li>
            {/* Competition dropdown for mobile */}
            <li className="relative w-full">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-white text-lg transition-transform hover:scale-110 inline-block"
              >
                Competition <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen && (
                <ul className="mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg text-left z-10 min-w-[180px] text-white">
                  <li
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer whitespace-nowrap text-lg"
                    onClick={() => {
                      setDropdownOpen(false)
                      setMobileMenuOpen(false)
                    }}
                  >
                    AI and Robotic Competition
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default SiteHeader