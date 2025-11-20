// import React, { useState } from "react";
// import Link from "next/link";
// import style from "./Navbar.module.scss";
// import logo from "../../../public/logo.png";
// import Image from "next/image";

// function Navbar() {
//   const [activeMenu, setActiveMenu] = useState("Home");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "Products", path: "/service" },
//     { name: "About Intellgus", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const handleMenuClick = (item) => {
//     setActiveMenu(item);
//     setMenuOpen(false);
//   };

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   return (
//     <nav className={style.mainContain} aria-label="Primary Navigation">
//       <div className={style.logo}>
//         <Link href="/" aria-label="Home" tabIndex={-1}>
//           <Image src={logo} alt="intellgus logo" height={30} />
//         </Link>
//       </div>

//       <button
//         className={`${style.hamburger} ${menuOpen ? style.active : ""}`}
//         onClick={toggleMenu}
//         aria-label={menuOpen ? "Close menu" : "Open menu"}
//         aria-expanded={menuOpen}
//         aria-controls="primary-navigation"
//       >
//         <span />
//         <span />
//         <span />
//       </button>

//       <ul
//         id="primary-navigation"
//         className={`${style.menu} ${menuOpen ? style.active : ""}`}
//         role="menu"
//       >
//         {menuItems.map(({ name, path }) => (
//           <li key={name} role="none">
//             <Link
//               href={path}
//               className={activeMenu === name ? style.active : ""}
//               role="menuitem"
//               tabIndex={0}
//               onClick={() => handleMenuClick(name)}
//             >
//               {name}
//             </Link>
//           </li>
//         ))}

//         <li className="relative group" role="none">
//           <button
//             type="button"
//             className="inline-flex items-center justify-center text-gray-800   font-medium leading-5 rounded-md text-sm px-4 py-2 focus:outline-none"
//           >
//             Resource
//             <svg
//               className="w-4 h-4 ml-2"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="m19 9-7 7-7-7"
//               />
//             </svg>
//           </button>

//           {/* Dropdown menu */}
//           <div className="absolute top-10 left-0 top-full hidden group-hover:block z-20 bg-white border border-gray-200 rounded-md shadow-lg w-44">
//             <ul className="p-2 text-sm text-gray-700 font-medium">
//               <li>
//                 <Link
//                   href="/resource"
//                   className="block w-full p-2 rounded hover:bg-gray-100 hover:text-black"
//                 >
//                   Resource
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/industries"
//                   className="block w-full p-2 rounded hover:bg-gray-100 hover:text-black"
//                 >
//                   Industries
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/careers"
//                   className="block w-full p-2 rounded hover:bg-gray-100 hover:text-black"
//                 >
//                   Careers
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/blog"
//                   className="block w-full p-2 rounded hover:bg-gray-100 hover:text-black"
//                 >
//                   Blog
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/faqs"
//                   className="block w-full p-2 rounded hover:bg-gray-100 hover:text-black"
//                 >
//                   FAQ&apos;s
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </li>

//         <li role="none" className={style.non}>
//           <button className={style.buttonbook} onClick={() => setMenuOpen(false)}>
//             Book Consultation
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import Link from "next/link";
import style from "./Navbar.module.scss";
import logo from "../../../public/logo.png";
import Image from "next/image";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/service" }, // Products gets dropdown
    { name: "About Intellgus", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleMenuClick = (item) => {
    setActiveMenu(item);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={style.mainContain} aria-label="Primary Navigation">
      <div className={style.logo}>
        <Link href="/" aria-label="Home" tabIndex={-1}>
          <Image src={logo} alt="intellgus logo" height={30} />
        </Link>
      </div>

      <button
        className={`${style.hamburger} ${menuOpen ? style.active : ""}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <ul
        id="primary-navigation"
        className={`${style.menu} ${menuOpen ? style.active : ""}`}
        role="menu"
      >
        {menuItems.map(({ name, path }) =>
          name !== "Products" ? (
            <li key={name} role="none">
              <Link
                href={path}
                className={activeMenu === name ? style.active : ""}
                role="menuitem"
                tabIndex={0}
                onClick={() => handleMenuClick(name)}
              >
                {name}
              </Link>
            </li>
          ) : (
            // Products dropdown
            <li key="Products" className="relative group" role="none">
              <button
                type="button"
                className="inline-flex items-center justify-center text-gray-800 font-medium leading-5 rounded-md text-sm px-4 py-2 focus:outline-none"
              >
                Products
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Products Dropdown Menu */}
              <div className="absolute top-10 left-0 hidden group-hover:block z-20 bg-white border border-gray-200 rounded-md shadow-lg w-54">
                <ul className="p-2 text-sm text-gray-700 font-medium">
                  <li>
                    <Link
                      href="/Audit"
                      className="block w-full p-2 rounded hover:bg-gray-100 hover:text-black"
                    >
                     Audit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Virtual_CFO"
                      className="block w-full p-2 rounded hover:bg-gray-100 hover:text-black"
                    >
                      Virtual CFO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/  Tax_Resolution"
                      className="block w-full p-2 rounded hover:bg-gray-100 hover:text-black"
                    >
                       Tax Resolution
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Payroll_Management"
                      className="block w-full p-2 rounded hover:bg-gray-100 hover:text-black"
                    >
                     Payroll Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Bookkeeping_&_Accounting"
                      className="block w-full p-2 rounded hover:bg-gray-100 hover:text-black"
                    >
                     Bookkeeping & Accounting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Tax_Planning_&_Preparation"
                      className="block w-full p-2 rounded hover:bg-gray-100 hover:text-black"
                    >
                     Tax Planning & Preparation
                    </Link>
                  </li>
                  {/* Add more products as needed */}
                </ul>
              </div>
            </li>
          )
        )}

        {/* Resource Dropdown */}
        <li className="relative group" role="none">
          <button
            type="button"
            className="inline-flex items-center justify-center text-gray-800   font-medium leading-5 rounded-md text-sm px-4 py-2 focus:outline-none"
          >
            Resource
            <svg
              className="w-4 h-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 9-7 7-7-7"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          <div className="absolute top-10 left-0 hidden group-hover:block z-20 bg-white border border-gray-200 rounded-md shadow-lg w-44">
            <ul className="p-2 text-sm text-gray-700 font-medium">
              <li>
                <Link
                  href="/resource"
                  className="block w-full p-2 rounded hover:bg-gray-100 hover:text-black"
                >
                  Resource
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="block w-full p-2 rounded hover:bg-gray-100 hover:text-black"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="block w-full p-2 rounded hover:bg-gray-100 hover:text-black"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block w-full p-2 rounded hover:bg-gray-100 hover:text-black"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block w-full p-2 rounded hover:bg-gray-100 hover:text-black"
                >
                  FAQ&apos;s
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Book Consultation Button */}
        <li role="none" className={style.non}>
          <button
            className={style.buttonbook}
            onClick={() => setMenuOpen(false)}
          >
            Book Consultation
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
