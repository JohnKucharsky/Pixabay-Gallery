import React, { useState } from "react";

export default function Search({ setTerm }) {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setTerm(text);
  };

  return (
    <div className="max-w-sm rounded my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full">
        <div className="flex items-center border-b-2 border-orange-500  py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Search image text..."
            className="w-full text-gray-700 py-1 px-2 focus:outline-none"
          />
          <button className=" bg-orange-500 hover:bg-teal-700 border-orange-500 hover:border-orange-700 text-base border-4 text-white  px-2 rounded">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
