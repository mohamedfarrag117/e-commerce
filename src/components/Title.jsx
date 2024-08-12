const Title = () => {
  return (
    <div className="relative">
      <div className="headers flex md:flex-row flex-col justify-center items-center  ">
        <div className="bg-[#F83539] w-full md:w-full h-10 md:h-[25rem]  "></div>
        <div className=" absolute md:left-64 right-0 bg-title-bg bg-no-repeat flex items-center justify-center md:min-w-[35rem] w-[35rem] h-[25rem]   "></div>
        <div className=" bg-[#F83539] text-white flex flex-col items-center justify-center md:gap-5 gap-44 w-full min-w-[10rem] md:h-[25rem] h-[35rem]   ">
          <h2 className="font-brunoAce mb-64 md:mb-0 text-base md:text-4xl z-10 md:z-0">
            Browse Our Premium Product
          </h2>
          <h3 className="font-brunoAce text-base z-10 md:z-0 md:flex hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque
            cum, debitis labore, dicta sit laudantium vitae ipsa rem ipsam
            corporis aspernatur placeat quas minima doloremque aliquam pariatur
            optio dolore.
          </h3>
          <button className="text-[#F83539] bg-white rounded-lg w-32 h-12 hover:bg-black hover:text-white hover:border-[#F83539] hover:border-[1px] transition-all ease-in-out duration-700">
            BROWSE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;
