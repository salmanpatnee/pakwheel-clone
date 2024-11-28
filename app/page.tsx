import Image from "next/image";
import Link from "next/link";
import Car from "./components/Car";

export default function Home() {
  const cars = [
    {
      name: "Suzuki Alto VXR",
      price: "PKR 2,251,000",
      reviewsCount: 400,
      imageUrl: "/alto2.jpg",
    },
    {
      name: "Toyota Corolla Altis 1.6 X",
      price: "PKR 5,759,000",
      reviewsCount: 270,
      imageUrl: "/altis.jpg",
    },
    {
      name: "Honda Civic Oriel Turbo",
      price: "PKR 8,019,000",
      reviewsCount: 500,
      imageUrl: "/civic.jpg",
    },
  ];

  return (
    <main className="mt-20">
      <h2 className="font-bold text-2xl text-center w-full text-gray-600 mb-6">
        Sell Your Car on PakWheels and Get the Best Price
      </h2>
      <section className="flex max-w-[1000px] mx-auto border border-gray-200 px-8 py-12 items-center justify-between">
        <div className="w-5/12">
          <h2 className="text-blue-900 font-bold text-xl mb-2">
            Post your Ad on PakWheels
          </h2>
          <ul className="text-sm text-gray-700 leading-7 mb-6">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5 text-green-600 inline-block me-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Post your Ad for Free in 3 Easy Steps
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5 text-green-600 inline-block me-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Get Genuine offers from Verified Buyers
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5 text-green-600 inline-block me-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Sell your car Fast at the Best Price
            </li>
          </ul>
          <a
            href="#"
            className="text-center text-white bg-vivid_red rounded py-3 px-10 text-lg"
          >
            Post Your Ad
          </a>
        </div>
        <div className="w-1/12 text-2xl text-gray-500 font-bold">OR</div>
        <div className="w-5/12">
          <h2 className="text-blue-900 font-bold text-xl mb-2">
            Try PakWheels Sell It For Me
          </h2>
          <ul className="text-sm text-gray-700 leading-7 mb-6">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5 text-green-600 inline-block me-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Dedicated Sales Expert to Sell your Car
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5 text-green-600 inline-block me-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              We Bargain for you and share the Best Offer
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5 text-green-600 inline-block me-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              We ensure Safe & Secure Transaction
            </li>
          </ul>
          <a
            href="#"
            className="text-center text-white bg-sky-500 rounded py-3 px-10 text-lg"
          >
            Register Your Car
          </a>
        </div>
      </section>
      <section className="p-12 mt-12 bg-gray-100">
        <div className="container max-w-[1000px] mx-auto">
          <div className="columns-2 mb-7">
            <div>
              <h3 className="font-bold text-xl text-gray-700">
                Featured New Cars
              </h3>
            </div>
            <div className="text-end">
              <a href="#" className="text-blue-500 text-sm hover:underline">
                View All New Cars
              </a>
            </div>
          </div>
          <ul className="list-none flex space-x-8 text-lg text-gray-500 border-b border-gray-300 pb-5 mb-5">
            <li className="text-black font-bold border-b">
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Upcoming</a>
            </li>
            <li>
              <a href="#">Newly Launched</a>
            </li>
          </ul>
          <div className="columns-4">
            {cars.map((car) => {
              return <Car car={car} key={car.name} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
