import React from "react";

const Content = () => {
  return (
    <>
      <h1 className="text-center text-4xl px-6 md:px-0 md:text-8xl font-extrabold text-white md:w-1/2">
        Making Investment more fun with{" "}
        <span className="text-blue-400">friends</span> and{" "}
        <span className="text-red-400">family</span>
      </h1>
      <span className="text-xl text-white my-6 text-center px-6 md:px-0 md:w-1/3">
        Create a wallet with friends and family within a minute and start
        building wealth on most trusted community wallet
      </span>
      <button className="font-semibold text-lg bg-gradient-to-r from-white to-gray-100 px-10 py-4 rounded">
        Join waitlist
      </button>
    </>
  );
};

export default Content;
