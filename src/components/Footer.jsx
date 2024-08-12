import React from "react";
import clothing1 from "../assets/images/clothing1.png";
import clothing2 from "../assets/images/clothing2.jpg";
import clothing3 from "../assets/images/clothing3.jpg";
import clothing4 from "../assets/images/clothing4.jpg";
import clothing5 from "../assets/images/clothing5.jpg";
import clothing6 from "../assets/images/clothing6.jpg";
const Footer = () => {
  return (
    <footer className=" text-white font-brunoAce p-16 mt-4  bg-[#F83539]  w-[150px] md:h-[430px] h-full min-w-full    ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
        <div>
          <h2 className="text-black text-3xl font-bold mb-2">Our Mission</h2>
          <p className="font-normal md:text-base text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            ipsum cum consectetur ipsam error autem vero voluptatem unde modi.
          </p>
          <br></br>
          <p className="font-normal md:text-base text-sm text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div>
          <h2 className="text-black text-3xl font-bold mb-2">Shortcuts</h2>
          <ul className="md:flex md:flex-col gap-10 md:gap-5 grid grid-cols-3 ">
            <div className="flex md:flex-row flex-col gap-2">
              <li className="text-[#F83539] text-center flex items-center justify-center bg-white rounded-lg md:w-32 w-24  md:h-16 h-14 hover:bg-black hover:text-white hover:border-[#F83539] hover:border-[1px] transition-all ease-in-out duration-700">
                <a href="/">Home</a>
              </li>
              <li className="text-[#F83539] text-center flex items-center justify-center bg-white rounded-lg md:w-32 w-24 md:h-16 h-14 hover:bg-black hover:text-white hover:border-[#F83539] hover:border-[1px] transition-all ease-in-out duration-700">
                <a href="/shop">Shop</a>
              </li>
            </div>
            <div className="flex md:flex-row flex-col gap-2">
              <li className="text-[#F83539] text-center flex items-center justify-center bg-white rounded-lg md:w-32 w-24 md:h-16 h-14 hover:bg-black hover:text-white hover:border-[#F83539] hover:border-[1px] transition-all ease-in-out duration-700">
                <a href="/blog">Blog</a>
              </li>
              <li className="text-[#F83539] text-center flex items-center justify-center bg-white rounded-lg md:w-32 w-24 md:h-16 h-14 hover:bg-black hover:text-white hover:border-[#F83539] hover:border-[1px] transition-all ease-in-out duration-700">
                <a href="/pages">Contact</a>
              </li>
            </div>
            <div className="flex md:flex-row flex-col gap-2">
              <li className="text-[#F83539] text-center flex items-center justify-center bg-white rounded-lg md:w-32 w-24 md:h-16 h-14 hover:bg-black hover:text-white hover:border-[#F83539] hover:border-[1px] transition-all ease-in-out duration-700">
                <a href="/contact">News</a>
              </li>
              <li className="text-[#F83539] text-center flex items-center justify-center bg-white rounded-lg md:w-32 w-24 md:h-16 h-14 hover:bg-black hover:text-white hover:border-[#F83539] hover:border-[1px] transition-all ease-in-out duration-700">
                <a href="/gallery">Cart</a>
              </li>
            </div>
          </ul>
        </div>
        <div>
          <h2 className="text-black text-3xl font-bold mb-2">Team</h2>

          <div className="container mx-auto  md:flex md:flex-col grid grid-cols-3  gap-3 mt-4">
            <div className="flex flex-col md:flex-row gap-2">
              <img
                src={clothing1}
                alt="Gallery Image 1"
                className="w-16 h-16"
              />
              <img
                src={clothing2}
                alt="Gallery Image 2"
                className="w-16 h-16"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <img
                src={clothing3}
                alt="Gallery Image 3"
                className="w-16 h-16"
              />
              <img
                src={clothing4}
                alt="Gallery Image 4"
                className="w-16 h-16"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <img
                src={clothing5}
                alt="Gallery Image 5"
                className="w-16 h-16"
              />
              <img
                src={clothing6}
                alt="Gallery Image 6"
                className="w-16 h-16"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col  md:gap-3">
          <h2 className="text-black text-3xl font-bold mb-2">Contact Us</h2>
          <p>
            <strong>Head Office</strong>
          </p>
          <p className="font-normal text-black">123, Main Street, Your City</p>
          <p>
            <strong>Phone Number</strong>
          </p>
          <p className="font-normal text-black">+123 456 7890</p>
          <p>
            <strong>Email</strong>
          </p>
          <p className="font-normal text-black">mohamedfarrag117@gmail.com</p>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>
          <span className="flex items-center justify-center gap-2">
            Copyright<p className="text-black text-lg"> ©2024</p>
          </span>{" "}
          All rights reserved | This template is made by :{" "}
          <p className="text-black">Mohamed Farrag</p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
