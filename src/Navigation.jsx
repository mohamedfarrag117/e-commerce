import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import shopIcon from "./assets/images/shopIcon.png";

const Navigation = () => {
  const dispatch = useDispatch();
  const cartNumbers = useSelector((state) => state.cartNumbers);
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleMenuDropDownToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Cleanup event listener on component unmount or when dropdown is closed
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 ">
      <div className=" max-w-screen-xl  flex flex-wrap items-start justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 pt-3 rtl:space-x-reverse"
        >
          <div className="relative flex md:items-center items-start md:justify-center gap-2">
            <i className="fa-brands fa-shopify text-[33.5px] mr-48 absolute top-0 left-2 text-[#F83539]"></i>
            <span className=" mx-10 text-xl font-semibold whitespace-nowrap font-brunoAce dark:text-white">
              MY STORE
            </span>
          </div>
        </Link>

        <button
          onClick={handleMenuDropDownToggle}
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="relative inline-flex items-center p-2 w-10 h-10 justify-center  right-2 top-1 text-sm text-[#F83539] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          // className="hidden w-full md:block md:w-auto font-brunoAce text-lg"
          className={`navbar-collapse ${
            isMenuOpen ? "navbar-collapse-open" : "navbar-collapse-closed"
          } md:block md:w-auto md:max-h-full p-3 font-brunoAce text-lg`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  location.pathname === "/" ? "text-[#F83539]" : "text-black"
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="" ref={dropdownRef}>
              <button
                id="dropdownNavbarLink"
                onClick={handleDropdownToggle}
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-start  w-full py-2 px-3 text-gray-900 md:p-0 md:w-auto"
              >
                Shop{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                className={`z-10 ${
                  isDropdownOpen ? "block ml-20" : "hidden"
                } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="z-20  absolute flex flex-col items-center justify-center border-2 rounded-lg w-52 bg-white   py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li
                    className={`flex items-center justify-center w-full  ${
                      location.pathname === "/electronics"
                        ? "hover:bg-black"
                        : "hover:bg-red-500"
                    }`}
                  >
                    <Link
                      to="/electronics"
                      className={`block py-2 px-3 rounded md:bg-transparent md:p-0  ${
                        location.pathname === "/electronics"
                          ? "text-[#F83539]"
                          : "text-black"
                      }`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Electronics
                    </Link>
                  </li>
                  <li
                    className={`flex items-center justify-center w-full  ${
                      location.pathname === "/menswear"
                        ? "hover:bg-black"
                        : "hover:bg-red-500"
                    }`}
                  >
                    <Link
                      to="/menswear"
                      className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                        location.pathname === "/menswear"
                          ? "text-[#F83539]"
                          : "text-black"
                      }`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Mens Wear
                    </Link>
                  </li>
                  <li
                    className={`flex items-center justify-center w-full  ${
                      location.pathname === "/womenswear"
                        ? "hover:bg-black"
                        : "hover:bg-red-500"
                    }`}
                  >
                    <Link
                      to="/womenswear"
                      className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                        location.pathname === "/womenswear"
                          ? "text-[#F83539]"
                          : "text-black"
                      }`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Womens Wear
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                to="/blog"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  location.pathname === "/blog"
                    ? "text-[#F83539]"
                    : "text-black"
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  location.pathname === "/contact"
                    ? "text-[#F83539]"
                    : "text-black"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="block py-2 px-3 w-6 text-gray-900 rounded  md:p-0"
              >
                <i className="fa-solid fa-cart-shopping cart-nav  group-hover:text-[#F83539]  "></i>
              </Link>
              <div className="flex items-center justify-center  text-white py-1 px-2 w-12 min-h-[6rem]  relative top-[-5rem] left-4  ">
                <p className="text-center text-sm bg-green-500 text-white rounded-full px-2 shadow-sm ">
                  {cartNumbers === 0 ? "" : cartNumbers}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
