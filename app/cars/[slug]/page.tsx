import Image from "next/image";
import Link from "next/link";
import React from "react";

const CarDetailPage = () => {
  return (
    <section className="bg-sky-100 flex  px-8 py-12">
      <div className="max-w-[1000px] mx-auto container ">
        <h2 className="text-3xl font-bold  underline text-center mb-5">
          Toyota Carolla 2024
        </h2>
        <Image
          className="w-30 h-30 object-cover mx-auto mb-12"
          src="/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg"
          alt="Corolla"
          width={233}
          height={175}
        />
        <ul className="flex justify-center space-x-4">
          <li>
            <Link
              href="/"
              className="bg-white hover:bg-blue-700 hover:text-white hover:border-blue-800 text-black border border-black px-6 py-4 rounded-md text-xs"
            >
              Book a test drive
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="bg-white hover:bg-blue-700 hover:text-white hover:border-blue-800 text-black border border-black px-6 py-4 rounded-md text-xs"
            >
              Request Bank Finance
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="bg-white hover:bg-blue-700 hover:text-white hover:border-blue-800 text-black border border-black px-6 py-4 rounded-md text-xs"
            >
              Visit Place
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="bg-white hover:bg-blue-700 hover:text-white hover:border-blue-800 text-black border border-black px-6 py-4 rounded-md text-xs"
            >
              Car Inspection
            </Link>
          </li>
        </ul>

        <h3 className="w-full text-center mt-10 mb-5 text-2xl">
          Vehicle Description
        </h3>
        <ul className="flex justify-center space-x-4 text-sm text-gray-500 mb-8">
          <li>
            <span className="font-bold text-black">Number of Doors</span> 4
          </li>
          <li>
            <span className="font-bold text-black">Engine</span> 1800
          </li>
          <li>
            <span className="font-bold text-black">Condition</span> 8.5 / 10
          </li>
          <li>
            <span className="font-bold text-black">Driven</span> 9,500 KM
          </li>
          <li>
            <span className="font-bold text-black">Suspension Type</span> Soft
            Suspention
          </li>
        </ul>
        <h5 className="text-center  text-green-400 text-xl mb-10">
          PKR 50.00,000
        </h5>

        <div className="text-center">
          <Link
            href="/payment"
            className=" bg-blue-700 text-white hover:bg-white hover:text-blue-700 border-blue-800  border border-black px-6 py-4 rounded-md text-xs"
          >
            Make Payment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarDetailPage;
