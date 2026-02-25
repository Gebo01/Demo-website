// import React from "react";

// function Header() {
//   return (
//     <div className="w-full">
//       <div className="max-w-7xl mx-auto flex items-center h-20 px-8">
//         {/* Logo */}
//         <div className="mr-10">
//           <h1 className="text-4xl text-red-600 font-bold ml-2">GEBO</h1>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 flex justify-center">
//           <ul className="flex space-x-8 text-gray-700 font-medium">
//             <li className="hover:text-red-600 cursor-pointer">Services</li>
//             <li className="hover:text-red-600 cursor-pointer">About us</li>
//             <li className="hover:text-red-600 cursor-pointer">Team</li>
//             <li className="hover:text-red-600 cursor-pointer">Pricing</li>
//             <li className="hover:text-red-600 cursor-pointer">Portfolio</li>
//             <li className="hover:text-red-600 cursor-pointer">
//               Testimonials
//             </li>
//             <li className="hover:text-red-600 cursor-pointer">Contacts</li>
//           </ul>
//         </nav>

//         {/* Button */}
//         <div className="ml-10">
//           <button className="border border-red-600 text-red-600 px-5 py-2 rounded-md font-medium hover:bg-red-600 hover:text-white transition">
//             BOOK NOW
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <h1 className="text-3xl text-red-600 font-bold">GEBO</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8 text-gray-700 font-medium">
            <li className="hover:text-red-600 cursor-pointer">Services</li>
            <li className="hover:text-red-600 cursor-pointer">About us</li>
            <li className="hover:text-red-600 cursor-pointer">Team</li>
            <li className="hover:text-red-600 cursor-pointer">Pricing</li>
            <li className="hover:text-red-600 cursor-pointer">Portfolio</li>
            <li className="hover:text-red-600 cursor-pointer">Testimonials</li>
            <li className="hover:text-red-600 cursor-pointer">Contacts</li>
          </ul>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="border border-red-600 text-red-600 px-5 py-2 rounded-md font-medium hover:bg-red-600 hover:text-white transition">
            BOOK NOW
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li className="hover:text-red-600 cursor-pointer">Services</li>
            <li className="hover:text-red-600 cursor-pointer">About us</li>
            <li className="hover:text-red-600 cursor-pointer">Team</li>
            <li className="hover:text-red-600 cursor-pointer">Pricing</li>
            <li className="hover:text-red-600 cursor-pointer">Portfolio</li>
            <li className="hover:text-red-600 cursor-pointer">Testimonials</li>
            <li className="hover:text-red-600 cursor-pointer">Contacts</li>
          </ul>

          <button className="mt-4 w-full border border-red-600 text-red-600 py-2 rounded-md font-medium hover:bg-red-600 hover:text-white transition">
            BOOK NOW
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;