import React from "react";

export default function ShoppingCart({ setOpenCart }) {
  return (
    <>
      <div className="fixed w-full  h-screen top-0 right-0 bg-black opacity-70"></div>
      <div className="fixed right-0 top-0 z-10  bg-white w-80 h-screen">
        <button
          onClick={() => setOpenCart(false)}
          className="absolute top-2 right-2 bg-orange-500 px-2 rounded-lg text-white "
        >
          {" "}
          Close
        </button>
      </div>
    </>
  );
}
