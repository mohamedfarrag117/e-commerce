const Sale = () => {
  return (
    <div className="font-brunoAce bg-sale-phone md:bg-sale-bg bg-contain md:bg-cover my-12 h-[450px] md:h-[900px] md:min-h-full w-full md:w-screen flex flex-col text-center items-center justify-center pl-32 md:pl-0 pr-[70rem] pb-44  gap-4">
      <div className="flex flex-col items-center justify-center gap-3 mt-36">
        <h2 className=" font-bold text-nowrap text-lg md:text-4xl">
          Up To 50% Off
        </h2>
        <h2 className="font-medium text-nowrap text-base md:text-3xl">
          Winter Sale
        </h2>
        <p className="text-nowrap">Lorem, ipsum dolor sit.</p>
        <button className="text-[#F83539] bg-white rounded-lg w-32 h-12 hover:bg-black hover:text-white hover:border-[#F83539] hover:border-[1px] transition-all ease-in-out duration-700">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Sale;
