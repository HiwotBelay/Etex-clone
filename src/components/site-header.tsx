"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom" // Using react-router-dom Link as per user's original code
import { ChevronDown } from "lucide-react"
import image from "../assets/navbarimage.png" // Using the image imported from assets

export function SiteHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [headerClass, setHeaderClass] = useState("bg-black") // Pure black background

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderClass("bg-white/10 backdrop-blur-sm") // White transparent on scroll
      } else {
        setHeaderClass("bg-black") // Pure black at top
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`w-full text-foreground py-4 pl-5 pr-6 border-b border-border-accent fixed top-0 z-50 transition-all duration-300 h-[120px] flex items-center ${headerClass}`}
    >
      <div className="flex items-center justify-between w-full h-full">
        {/* Left Section: Single Combined Image */}
        <div className="flex items-center h-full">
          <img
            src={image || "/placeholder.svg"} // Using the imported image
            alt="ETEX Ethiopian Tech Expo 2025 Logos and Sponsors"
            width={560}
            height={72}
            className="object-contain" // Ensure the image fits within the dimensions
          />
        </div>
        {/* Right Section: Navigation Links */}
        <nav>
          <div className="flex flex-col items-end">
            {" "}
            {/* Container for two rows of navigation */}
            <ul className="flex space-x-8 items-center mb-2">
              {" "}
              {/* Top row */}
              <li>
                <Link to="#" className="text-foreground transition-transform hover:scale-110 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="text-foreground transition-transform hover:scale-110 inline-block">
                  Agenda
                </Link>
              </li>
              <li>
                <Link to="#" className="text-foreground transition-transform hover:scale-110 inline-block">
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-foreground transition-transform hover:scale-110 whitespace-nowrap inline-block"
                >
                  Sponsors/Exhibitors
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-foreground transition-transform hover:scale-110 whitespace-nowrap inline-block"
                >
                  Call for papers
                </Link>
              </li>
            </ul>
            <ul className="flex items-center">
              {" "}
              {/* Bottom row for Competition */}
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-foreground transition-transform hover:scale-110 inline-block"
                >
                  Competition <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {dropdownOpen && (
                  <ul className="absolute right-0 mt-2 bg-background-card border border-border-dark-grey rounded shadow-lg text-left z-10 min-w-[120px]">
                    <li className="px-4 py-2 hover:bg-background-dark cursor-pointer whitespace-nowrap">
                      AI and Robotic Competition
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
