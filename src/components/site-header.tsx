import { Download, Linkedin, X, Facebook, Instagram, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"; // only if you're using react-router-dom

export function SiteHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="w-full bg-background-dark text-foreground py-4 px-6 border-b border-border-accent fixed top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Section: Logos and Sponsors */}
        <div className="flex items-center space-x-6">
          {/* ETEX Logo */}
          <img
            src="/placeholder.svg?height=60&width=120"
            alt="ETEX Ethiopian Tech Expo 2025"
            width={120}
            height={60}
          />

          {/* Hosted By */}
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <p className="text-foreground text-sm font-bold mb-1">Hosted By</p>
              <div className="flex items-center space-x-2">
                <img src="/placeholder.svg?height=40&width=40" alt="Hosted Logo 1" width={40} height={40} />
                <img src="/placeholder.svg?height=40&width=40" alt="Hosted Logo 2" width={40} height={40} />
              </div>
            </div>
            <div className="h-16 w-px bg-border-accent" />
          </div>

          {/* Co-hosted By */}
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <p className="text-foreground text-sm font-bold mb-1">Co-hosted By</p>
              <div className="flex items-center space-x-2">
                <img src="/placeholder.svg?height=40&width=40" alt="Co-hosted Logo 1" width={40} height={40} />
                <img src="/placeholder.svg?height=40&width=40" alt="Co-hosted Logo 2" width={40} height={40} />
                <img src="/placeholder.svg?height=40&width=40" alt="Co-hosted Logo 3" width={40} height={40} />
              </div>
            </div>
            <div className="h-16 w-px bg-border-accent" />
          </div>

          {/* Title Sponsor */}
          <div className="flex flex-col items-center">
            <p className="text-foreground text-sm font-bold mb-1">Title Sponsor</p>
            <img src="/placeholder.svg?height=40&width=80" alt="Title Sponsor Logo" width={80} height={40} />
          </div>
        </div>

        {/* Right Section: Navigation Links */}
        <nav>
          <ul className="flex space-x-8 items-center">
            <li>
              <Link to="#" className="text-foreground hover:text-text-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="text-foreground hover:text-text-accent transition-colors">
                Agenda
              </Link>
            </li>
            <li>
              <Link to="#" className="text-foreground hover:text-text-accent transition-colors">
                Speakers
              </Link>
            </li>
            <li>
              <Link to="#" className="text-foreground hover:text-text-accent transition-colors">
                Sponsors/Exhibitors
              </Link>
            </li>
            <li>
              <Link to="#" className="text-foreground hover:text-text-accent transition-colors">
                Call for papers
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-foreground hover:text-text-accent transition-colors"
              >
                Competition <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-card-dark border border-border-accent rounded shadow-lg text-left z-10">
                  <li className="px-4 py-2 hover:bg-background-dark cursor-pointer">Item 1</li>
                  <li className="px-4 py-2 hover:bg-background-dark cursor-pointer">Item 2</li>
                  <li className="px-4 py-2 hover:bg-background-dark cursor-pointer">Item 3</li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
