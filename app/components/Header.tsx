import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <header id="main_header" className="bg-black text-white">
      <div className="flex container mx-auto max-w-[1200px] border-b border-charcoal text-sm py-2 mb-3">
        <div className="w-1/2">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5 inline text-vivid_red"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>

            <a href="#"> Download App via SMS </a>
          </p>
        </div>
        <div className="w-1/2 text-right">
          <ul className="inline-flex space-x-4">
            <li className="border-e border-charcoal pe-2">
              <a href="#" className="text-vivid_red">
                اردو
              </a>
            </li>
            <li className="border-e border-charcoal pe-2">
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex container max-w-[1200px] mx-auto header flex space-x-4 items-center py-3">
        <div className="w-1/6">
          <Link href="/">
            <Image
              className="w-40"
              src="/logo-light.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
