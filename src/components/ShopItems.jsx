import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast } from "react-hot-toast";
import { useState } from "react";

const ShopItems = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const cartNumbers = useSelector((state) => state.cartNumbers);
  const [currentToast, setCurrentToast] = useState(null);
  const handleAddToCart = (item, quantity) => {
    dispatch(addToCart({ ...item, quantity }));
    const updatedCartNumbers = cartNumbers + quantity;
    // toast.success(`Item added to cart! ${updatedCartNumbers}`);
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

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="shop-header flex justify-start items-center ml-20 ">
          <h1 className="font-brunoAce font-bold text-2xl">
            Recommended for you
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12  lg:m-16 items-center justify-center">
          {items.map((item) => (
            <>
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
            </>
          ))}
        </div>

        {/* <div className="absolute top-10 right-0 ">
          <p>Items in cart : </p>
          {cartNumbers}
        </div> */}
      </div>
    </>
  );
};

export default ShopItems;
