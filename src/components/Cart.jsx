import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllFromCart,
  removeFromCart,
  updateQuantity,
} from "../redux/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity(id, quantity));
  };

  const handleAdd = (id, quantity) => {
    handleQuantityChange(id, quantity + 1);
  };

  const handleMinus = (id, quantity) => {
    if (quantity > 1) {
      handleQuantityChange(id, quantity - 1);
    }
  };

  const totalPayment = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="font-brunoAce p-4 mx-auto flex flex-col justify-center items-stretch  md:w-[100rem] gap-9">
        <h2 className="text-2xl font-bold">Cart</h2>
        {cart.length === 0 && (
          <p className="self-center text-3xl font-brunoAce m-32">
            Your cart is empty
          </p>
        )}
        {cart.map((item) => {
          const totalPrice = item.price * item.quantity;

          return (
            <div
              key={item.id}
              className="border p-4 mt-2 rounded-lg shadow-md flex justify-evenly items-center gap-1 "
            >
              <img src={item.img} className="w-10 md:w-32 h-10 md:h-20" />

              <button
                className="w-6 md:w-10 rounded-full bg-green-600 active:scale-110"
                onClick={() => handleAdd(item.id, item.quantity)}
              >
                +
              </button>

              <p className=" flex items-center justify-center text-xs w-6">
                {item.quantity}
              </p>

              <button
                className="w-6 md:w-10 rounded-full text-white bg-black active:scale-110"
                onClick={() => handleMinus(item.id, item.quantity)}
              >
                -
              </button>
              <i
                className="fa-solid fa-trash-can flex items-center justify-center gap-3 text-[#F83539] md:text-white md:bg-[#F83539] rounded-lg  md:w-12  md:h-12 text-lg hover:bg-transparent transition-all ease-in-out duration-700  hover:text-[#F83539] hover:border-[#F83539] hover:border-[1px] cursor-pointer"
                onClick={() => dispatch(removeFromCart(item.id))}
              ></i>

              <div className="flex items-center justify-center gap-2 w-32 ">
                <p className="text-nowrap md:text-base text-xs w-20 md:w-full ">
                  Total price:
                </p>{" "}
                <p className="text-wrap md:text-sm text-xs  w-10 md:w-full">
                  ${totalPrice}
                </p>
              </div>
            </div>
          );
        })}
        {cart.length !== 0 ? (
          <div className="flex justify-around items-center h-20 md:h-32 font-brunoAce text-white text-base rounded-lg shadow-md shadow-black bg-gray-800/75  ">
            <div className="flex gap-2 md:gap-96">
              all price: <p className="w-10">${totalPayment}</p>
            </div>
            <button className="text-[#F83539] bg-white rounded-lg w-32 h-12 md:mr-14 hover:bg-black hover:text-white  transition-all ease-in-out duration-700">
              Procceed
            </button>
          </div>
        ) : (
          ""
        )}

        <button
          className="self-center text-white bg-[#dc3545] rounded-lg w-32 h-12 hover:bg-transparent hover:text-[#dc3545] hover:border-[#dc3545] hover:border-[1px] duration-500 "
          onClick={() => dispatch(removeAllFromCart())}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default Cart;
