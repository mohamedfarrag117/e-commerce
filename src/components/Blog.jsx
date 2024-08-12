import React from "react";
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.png";
import blog4 from "../assets/images/blog4.jpg";
const Blog = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" contact-title bg-[#f0f2f3] w-full h-96 flex items-center justify-center text-center  ">
        <h1 className="font-brunoAce text-4xl text-[#F83539] ">OUR BLOG</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around gap-5 m-10">
        <img src={blog1} className="w-96 h-64 shadow-lg rounded-lg" />

        <img src={blog2} className="w-96 h-64 shadow-lg rounded-lg" />

        <img src={blog3} className="w-96 h-64 shadow-lg rounded-lg" />
      </div>

      <div className="flex flex-col items-center justify-start bg-[#f0f2f3] m-16 p-20 h-[70rem] md:w-2/3 rounded-2xl shadow-2xl ">
        <img src={blog4} className="w-[100rem] shadow-lg rounded-lg" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="flex flex-col items-center justify-center gap-4 mt-5 font-brunoAce text-base">
            <h2 className="text-sm text-nowrap">
              Food, Technology , Politics, Lifestyle
            </h2>
            <h3>User</h3>
            <date>20 NOV, 2024</date>
            <h3>1.2M VIEWS</h3>
            <h3>06 COMMENTS</h3>
          </div>
          <div className="font-brunoAce text-lg text-start">
            <h1 className="text-[#F83539]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              ea veritatis ad omnis dolorem ex distinctio iure praesentium,
              quia, assumenda iusto fugiat eaque ipsam. Sapiente similique in
              officiis nesciunt optio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
