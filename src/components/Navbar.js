import React from "react";
const Navbar = () => {
  return (
    <div className="my-4 px-4 flex font-bold items-center justify-between w-full absolute z-[100] cursor-pointer">
      <h1 className="text-4xl text-red-600">NETFLIX</h1>
      <div className="flex gap-4  text-white">
        <button className="">Sign In</button>
        <button className=" px-6 py-4 rounded bg-red-600 "> Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
