import React, { useContext } from "react";
import { CartContext } from "../CartContext/cartContext";
import { FaPlus, FaWindowMinimize } from "react-icons/fa";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, calculateTotal } = useContext(CartContext);


  const handleIncrement = (id) => {
    updateQuantity(id, 1);
  };

  const handleDecrement = (id) => {
    updateQuantity(id, -1);
  };

  return (
    <div className="bg-[#262626] py-32 sm:px-8 md:px-16 lg:px-24 xl:px-32 px-4 text-white grid gap-8 lg:grid-cols-4">
      <div className="Smoothie border p-5 border-yellow-600 space-y-10 lg:col-span-3 col-span-4 flex flex-col justify-center items-center">
        <button
          type="button"
          className="text-gray-900 flex items-center bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-xl px-10 py-2.5 text-center"
        >
          Cart
        </button>

        <ul className="space-y-10 w-fit">
          {cartItems.map((item, index) => (
            <div
              className="flex flex-col md:flex-row items-center bg-[#2F2F30] border-gray-200 rounded-lg shadow space-y-4 md:space-y-0 md:space-x-4 p-4 hover:bg-zinc-800 transform transition duration-500 hover:scale-105 justify-center dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              key={item.id}
            >
              <img
                className="w-full md:w-32 lg:w-48 rounded-lg"
                src={item.img}
                alt={item.title}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-lg md:text-xl lg:text-2xl font-bold text-white">
                  {item.title}
                </h5>
                <p className="mb-3 text-sm md:text-base text-white">
                  {item.description}
                </p>
                <p className="mb-3 text-sm md:text-base font-semibold text-white">
                  ${item.price}
                </p>
                <div className="grid gap-3 sm:gap-4 md:gap-5">
                  <button
                    type="button"
                    className="flex items-center gap-5 w-fit justify-center text-white border border-white hover:border-yellow-500 focus:ring-1 focus:outline-none focus:ring-gray-300 font-semibold rounded-full text-xs md:text-sm lg:text-base px-4 py-2"
                  >
                    <FaPlus
                      className="hover:text-yellow-500"
                      onClick={() => handleIncrement(item.id)}
                    />
                    <p>{item.quantity}</p>
                    <FaWindowMinimize
                      className="hover:text-yellow-500 mb-2"
                      onClick={() => handleDecrement(item.id)}
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xs md:text-sm px-4 py-2.5"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-1 col-span-4 border-double border-4 border-yellow-600  p-4 w-full h-fit">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-500 dark:text-gray-400">
            <thead className="text-xs sm:text-sm md:text-base text-gray-300 uppercase dark:bg-gray-700 dark:text-gray-400">
              {cartItems.length === 0 ? (
                <> </>
              ) : (
                <tr>
                  <th scope="col" className=" py-2 rounded-l-lg">
                    Product name
                  </th>
                  <th scope="col" className=" py-2 rounded-r-lg">
                    Price
                  </th>
                  <th scope="col" className=" py-2">
                    Quantity
                  </th>
                </tr>
              )}
            </thead>
            <tbody>
              {cartItems.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center text-white text-xl border-t border-yellow-500 py-7"
                  >
                    <img
                      src={"emptyCard-removebg-preview.png"}
                      alt="emptyCard"
                      className="w-auto p-5"
                    />
                    Your cart is empty
                  </td>
                </tr>
              ) : (
                cartItems.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-t border-yellow-500 dark:bg-gray-800"
                  >
                    <td className=" py-3 text-xs sm:text-sm md:text-base lg:text-lg font-normal text-gray-300 dark:text-white">
                      {item.title}
                    </td>
                    <td className=" py-3 text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
                      {item.quantity}
                    </td>
                    <td className=" py-3 text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            <tfoot>
              <tr className="font-semibold text-lg md:text-xl overflow-x-auto lg:text-lg text-gray-300 border-t border-yellow-500 dark:text-white">
                <th scope="row" colSpan="2" className="py-3">
                  Total Amount
                </th>
                <td className=" py-2">${calculateTotal().toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;

