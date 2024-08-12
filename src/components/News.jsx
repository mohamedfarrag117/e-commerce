import shop1 from "../assets/images/shop1.png";
import shop2 from "../assets/images/shop2.jpg";
import shop3 from "../assets/images/shop3.png";

const News = () => {
  return (
    <div className="font-brunoAce mt-10">
      <div className="titles mb-8 ml-36 md:ml-0 flex flex-col items-center mr-[1200px]">
        <h2 className="font-normal text-gray-500 text-nowrap mb-3 ">
          Popular Item in the market
        </h2>
        <div className="mb-7">
          <h1 className=" font-bold text-3xl text-black ">Latest News</h1>
          <div className="border-2 border-[#F83539] w-28 ml-[136px]"></div>
        </div>
      </div>
      <div className="news flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="news-item flex flex-col gap-2 justify-center items-center text-center max-w-96">
          <img className="w-96 h-64 shadow-md rounded-md" src={shop1} />
          <h2 className="font-medium  text-slate-950 hover:text-[#F83539]">
            The Richland Center Shooping News and weekly shooper
          </h2>
          <p className="font-light text-sm font-serif text-gray-400">
            Let one fifth i bring fly to divided face for bearing divide unto
            seed. Winged divided light Forth.
          </p>
        </div>
        <div className="news-item flex flex-col gap-2 justify-center items-center text-center max-w-96">
          <img className="w-96 h-64 shadow-md rounded-md" src={shop2} />
          <h2 className="font-medium text-slate-950 hover:text-[#F83539]">
            The Richland Center Shooping News and weekly shooper
          </h2>
          <p className="font-light text-sm font-serif text-gray-400">
            Let one fifth i bring fly to divided face for bearing divide unto
            seed. Winged divided light Forth.
          </p>
        </div>
        <div className="news-item flex flex-col gap-2 justify-center items-center text-center max-w-96">
          <img className="w-96 h-64 shadow-md rounded-md" src={shop3} />
          <h2 className="font-medium text-slate-950 hover:text-[#F83539]">
            The Richland Center Shooping News and weekly shooper
          </h2>
          <p className="font-light text-sm font-serif text-gray-400">
            Let one fifth i bring fly to divided face for bearing divide unto
            seed. Winged divided light Forth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
