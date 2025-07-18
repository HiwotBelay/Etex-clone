// "use client"

// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { ChevronDown, Menu, X } from "lucide-react"
// import image from "../assets/navbarimage.png"

// export function SiteHeader() {
//   const [dropdownOpen, setDropdownOpen] = useState(false)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [headerClass, setHeaderClass] = useState("bg-black") // Pure black background

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen)
//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen)
//     setDropdownOpen(false) // Close dropdown when mobile menu toggles
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setHeaderClass("bg-black/30 backdrop-blur-sm") // Black with 20% opacity on scroll
//       } else {
//         setHeaderClass("bg-black") // Pure black at top
//       }
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   return (
//     <header
//       className={`w-full text-white py-4 pl-5 pr-6 border-b border-gray-700 fixed top-0 z-50 transition-all duration-300 h-[120px] flex items-center ${headerClass}`}
//     >
//       <div className="flex items-center justify-between w-full h-full">
//         {/* Left Section: Single Combined Image */}
//         <div className="flex items-center h-full">
//           <Link to="/">
//             <img
//               src={image || "/placeholder.svg"}
//               alt="ETEX Ethiopian Tech Expo 2025 Logos and Sponsors"
//               width={560}
//               height={72}
//               className="object-contain h-full max-h-[72px] w-auto"
//             />
//           </Link>
//         </div>

//         {/* Right Section: Navigation Links (Desktop) */}
//         <nav className="hidden md:flex md:flex-col md:items-end">
//           {/* Container for two rows of navigation */}
//           <ul className="flex space-x-8 items-center mb-2">
//             {/* Top row */}
//             <li>
//               <Link to="#" className="text-white transition-transform hover:scale-110 inline-block">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="#" className="text-white transition-transform hover:scale-110 inline-block">
//                 Agenda
//               </Link>
//             </li>
//             <li>
//               <Link to="#" className="text-white transition-transform hover:scale-110 inline-block">
//                 Speakers
//               </Link>
//             </li>
//             <li>
//               <Link to="#" className="text-white transition-transform hover:scale-110 whitespace-nowrap inline-block">
//                 Sponsors/Exhibitors
//               </Link>
//             </li>
//             <li>
//               <Link to="#" className="text-white transition-transform hover:scale-110 whitespace-nowrap inline-block">
//                 Call for papers
//               </Link>
//             </li>
//           </ul>
//           <ul className="flex items-center">
//             {/* Bottom row for Competition */}
//             <li className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="flex items-center text-white transition-transform hover:scale-110 inline-block"
//               >
//                 Competition <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               {dropdownOpen && (
//                 <ul className="absolute right-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg text-left z-10 min-w-[120px] text-white">
//                   <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer whitespace-nowrap">
//                     AI and Robotic Competition
//                   </li>
//                 </ul>
//               )}
//             </li>
//           </ul>
//         </nav>

//         {/* Mobile Menu Button (Hamburger icon) */}
//         <div className="md:hidden flex items-center relative">
//           <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
//             <Menu className="h-8 w-8" />
//           </button>

//           {/* Mobile Navigation Menu (Slide-down box from right) */}
//           <div
//             className={`${
//               mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
//             } transition-opacity duration-300 ease-in-out
//             absolute top-full right-0 mt-2 w-64 bg-black p-4 border border-gray-700 rounded-md shadow-lg`}
//           >
//             {/* Close button for mobile menu */}
//             <button onClick={toggleMobileMenu} className="absolute top-2 right-2 text-white focus:outline-none">
//               <X className="h-6 w-6" />
//             </button>

//             {/* Mobile navigation links */}
//             <ul className="flex flex-col space-y-4 items-start w-full pt-6">
//               <li>
//                 <Link
//                   to="#"
//                   className="text-white text-lg transition-transform hover:scale-110 inline-block"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="#"
//                   className="text-white text-lg transition-transform hover:scale-110 inline-block"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Agenda
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="#"
//                   className="text-white text-lg transition-transform hover:scale-110 inline-block"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Speakers
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="#"
//                   className="text-white text-lg transition-transform hover:scale-110 whitespace-nowrap inline-block"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Sponsors/Exhibitors
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="#"
//                   className="text-white text-lg transition-transform hover:scale-110 whitespace-nowrap inline-block"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Call for papers
//                 </Link>
//               </li>
//               {/* Competition dropdown for mobile */}
//               <li className="relative w-full">
//                 <button
//                   onClick={toggleDropdown}
//                   className="flex items-center text-white text-lg transition-transform hover:scale-110 inline-block"
//                 >
//                   Competition <ChevronDown className="ml-1 h-4 w-4" />
//                 </button>
//                 {dropdownOpen && (
//                   <ul className="mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg text-left z-10 min-w-[180px] text-white">
//                     <li
//                       className="px-4 py-2 hover:bg-gray-700 cursor-pointer whitespace-nowrap text-lg"
//                       onClick={() => {
//                         setDropdownOpen(false)
//                         setMobileMenuOpen(false)
//                       }}
//                     >
//                       AI and Robotic Competition
//                     </li>
//                   </ul>
//                 )}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }
