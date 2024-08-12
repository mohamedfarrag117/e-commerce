import React, { useState } from "react";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

console.log("slide1:", slide1);
console.log("slide2:", slide2);
console.log("slide3:", slide3);

const slideItems = [
  {
    id: 1,
    image: slide1, // Use the imported variable here
    title: "Summer Collection 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: slide2, // Use the imported variable here
    title: "Exclusive Offer: 20% Off",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: slide3, // Use the imported variable here
    title: "Limited Edition Sneakers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.twitter.com",
  },
];

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slideItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slideItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative group mt-20 h-[30rem]">
      {slideItems.map((slide, index) => {
        console.log("Rendering slide:", slide.title);
        return (
          <div
            key={slide.id}
            className={` absolute inset-0  flex items-center justify-center  transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={"Slide" + slide.id}
              className="md:w-2/3 w-[85%] h-[30rem] object-cover rounded-3xl"
            />
            <p
              className={` carousel-text absolute flex items-center justify-center md:text-5xl text-lg md:mt-0 mt-5 font-brunoAce  text-white  transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide.title}
            </p>
          </div>
        );
      })}

      {/* Navigation */}

      <div className="relative flex items-center justify-around pt-52  w-full">
        <button
          onClick={handlePrev}
          className="w-8 md:w-12 h-8 md:h-12 text-xs md:text-xl mr-20 bg-white text-[#F83539] p-2 rounded-full hover:bg-black hover:text-white transition duration-700 ease-in-out"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="w-8 md:w-12 h-8 md:h-12 text-xs md:text-xl ml-20 bg-white text-[#F83539] p-2 rounded-full hover:bg-black hover:text-white transition duration-700 ease-in-out"
        >
          &#10095;
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute top-[28rem] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slideItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Slide;
