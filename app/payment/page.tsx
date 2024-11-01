import React from "react";

const PaymentPage = () => {
  return (
    <div>
      <section className="bg-sky-50 flex  px-8 py-12">
        <div className="max-w-[1200px] mx-auto container ">
          <h2 className="text-3xl font-bold  text-center mb-5">
            Enter Your Details
          </h2>
          <form
            action="/thank-you"
            className="border border-gray-400 p-5 pt-20 flex-col flex items-center"
          >
            <input
              type="text"
              placeholder="Enter your Name"
              required
              className="text-sm px-3 py-2 rounded border border-gray-400 w-72 mb-4"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              required
              className="text-sm px-3 py-2 rounded border border-gray-400 w-72 mb-4"
            />
            <input
              type="number"
              placeholder="Card number"
              required
              className="text-sm px-3 py-2 rounded border border-gray-400 w-72 mb-4"
            />
            <input
              type="text"
              placeholder="Address"
              required
              className="text-sm px-3 py-2 rounded border border-gray-400 w-72 mb-8"
            />

            <button
              type="submit"
              className=" bg-blue-700 text-white hover:bg-white hover:text-blue-700 border-blue-800  border border-black px-6 py-4 rounded-md text-xs"
            >
              Place your order
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PaymentPage;
