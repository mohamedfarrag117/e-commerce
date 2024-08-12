import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import toast from "react-hot-toast";

const ShopItem = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const [relatedItems, setRelatedItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Index for the current set of items
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const cartNumbers = useSelector((state) => state.cartNumbers);
  const [currentToast, setCurrentToast] = useState(null);

  const handleAddToCart = (item, quantity) => {
    dispatch(addToCart({ ...item, quantity }));
    const updatedCartNumbers = cartNumbers + quantity;

    if (currentToast) {
      toast.dismiss(currentToast);
    }
    const toastId = toast.success(
      <div className="flex items-center justify-center gap-3">
        <p>Item added to cart!</p>
        <div className="flex items-center justify-center gap-1">
          <i className="fa-solid fa-cart-shopping cart-toast "></i>{" "}
          {updatedCartNumbers}
        </div>
      </div>
    );
    setCurrentToast(toastId);
  };

  useEffect(() => {
    if (item) {
      const filteredItems = items.filter(
        (filteredItem) =>
          filteredItem.category === item.category && filteredItem.id !== item.id
      );
      setRelatedItems(filteredItems);
    }
  }, [item, items]);

  const getItemsPerPage = () => {
    if (window.innerWidth < 768) {
      return 1; // Show 1 item per page on mobile screens
    }
    return 4; // Default to 4 items per page on larger screens
  };

  const [ITEMS_PER_PAGE, setItemsPerPage] = useState(getItemsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, Math.ceil(relatedItems.length / ITEMS_PER_PAGE) - 1)
        : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(relatedItems.length / ITEMS_PER_PAGE) - 1
        ? 0
        : prevIndex + 1
    );
  };

  const startIndex = currentIndex * ITEMS_PER_PAGE;
  const currentItems = relatedItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (!item) {
    return <h2>No item found</h2>;
  }

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:h-[40rem]">
        <div>
          <img
            className="w-72 h-64 hover:scale-105 duration-1000"
            src={item.img}
            alt={item.name}
          />
        </div>
        <div className="flex flex-col items-start md:justify-center gap-4 w-96 md:w-[50rem] md:text-xl pl-10 md:pl-0 font-brunoAce">
          <h1 className="flex">
            <span className="text-[#F83539] font-bold">NAME:</span>
            &nbsp;&nbsp;{item.name}
          </h1>
          <h1 className="box-border ">
            <span className="text-[#F83539] font-bold text-balance">
              DESCRIPTION:
            </span>
            &nbsp;&nbsp;{item.description}
          </h1>
          <h1 className="flex">
            <span className="text-[#F83539] font-bold">CATEGORY:</span>
            &nbsp;&nbsp;{item.category}
          </h1>
          <h1 className="flex">
            <span className="text-[#F83539] font-bold">PRICE:</span>
            &nbsp;&nbsp;{item.price} USD
          </h1>

          <div className="flex justify-start items-center gap-3">
            <div className="group flex justify-center items-center text-nowrap ">
              <button
                className="flex items-center justify-center gap-3 text-white bg-[#F83539] rounded-lg w-36 md:w-52 h-12 text-xs md:text-lg group-hover:bg-transparent transition-all  group-hover:scale-105  ease-in-out  group-hover:text-[#F83539] group-hover:border-[#F83539] group-hover:border-[1px]"
                onClick={() => handleAddToCart(item, item.quantity + 1)}
              >
                <i className="fa-solid fa-cart-plus text-white group-hover:text-[#F83539]  "></i>
                Add to cart
              </button>
            </div>

            <Link to="/cart ">
              <div className="group flex justify-center items-center text-nowrap">
                <button className="flex items-center justify-center gap-3 text-white bg-[#F83539] rounded-lg w-36 md:w-52 h-12 text-xs md:text-lg group-hover:bg-transparent transition-all  group-hover:scale-105  ease-in-out  group-hover:text-[#F83539] group-hover:border-[#F83539] group-hover:border-[1px]">
                  <i className="fa-solid fa-cart-shopping text-white group-hover:text-[#F83539]  "></i>
                  Go to cart
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Related Items Carousel */}
      <div className="related-items md:w-full mt-10 ">
        <h2 className="text-2xl font-bold font-brunoAce mb-5">
          Users also viewed:
        </h2>
        <div className="relative w-full">
          <div className="flex overflow-hidden  items-center justify-center">
            {currentItems.map((relatedItem) => (
              <div
                key={relatedItem.id}
                className={`flex flex-col items-center justify-center flex-shrink-0 p-2 ${
                  ITEMS_PER_PAGE === 1 ? "w-96" : "w-1/4"
                }`}
              >
                <div className="text-center flex flex-col items-center justify-center h-full  ">
                  <Link to="/item" state={{ item: relatedItem }}>
                    <img
                      src={relatedItem.img}
                      alt={relatedItem.name}
                      className="w-52  h-48  mx-auto"
                    />
                    <p className="md:h-full h-20 md:text-xl text-sm font-brunoAce">
                      {relatedItem.name}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black hover:text-white/50">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black hover:text-white/50">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
