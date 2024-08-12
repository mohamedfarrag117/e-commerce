import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions";

const Menswear = () => {
  const items = useSelector((state) => state.items);
  const MensItems = items.filter((item) => item.category === "MEN'S WEAR");
  const dispatch = useDispatch();
  const handleAddToCart = (item, quantity) => {
    dispatch(addToCart({ ...item, quantity }));
  };

  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        <div className="shop-header flex justify-start items-center ml-20 ">
          <h1 className="font-brunoAce font-bold text-2xl">
            Recommended for you
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12  lg:m-16 items-center justify-center">
          {MensItems.map((item) => (
            <div
              key={item.id}
              className=" bottom-0 border p-4  m-1 rounded-lg shadow-xl w-full  h-full  flex flex-col justify-center text-center items-center hover-flip"
            >
              <img src={item.img} className="w-72 h-64 " />
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-lg">${item.price}</p>

              <input
                type="number"
                min="1"
                defaultValue="1"
                id={`quantity-${item.id}`}
              />

              <div className="flex gap-10">
                <div className="flex items-center justify-center bg-slate-100 rounded-md shadow-md w-12 h-12">
                  <i
                    className="fa-solid fa-cart-plus transition-all  hover:scale-105  ease-in-out duration-700"
                    onClick={() =>
                      handleAddToCart(
                        item,
                        parseInt(
                          document.getElementById(`quantity-${item.id}`).value
                        )
                      )
                    }
                  ></i>
                </div>

                <div className="flex items-center justify-center bg-slate-100 rounded-md shadow-md w-12 h-12">
                  <Link to="/item" state={{ item }}>
                    <i className="fa-solid fa-magnifying-glass transition-all  hover:scale-105  ease-in-out duration-300"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menswear;
