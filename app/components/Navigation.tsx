import React from "react";

const Navigation = () => {
  return (
    <nav className="w-5/6 text-right">
      <ul className="inline-flex space-x-6 text-base">
        <li>
          <a href="#" className="hover:text-vivid_red hover:bg-white p-3">
            Used Cars
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-vivid_red hover:bg-white p-3">
            New Cars
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-vivid_red hover:bg-white p-3">
            Bikes
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-vivid_red hover:bg-white p-3">
            Auto Store
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-vivid_red hover:bg-white p-3">
            Videos
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-vivid_red hover:bg-white p-3">
            Forums
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-vivid_red hover:bg-white p-3">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-vivid_red hover:bg-white p-3">
            More
          </a>
        </li>
        <li>
          <a href="#" className="bg-vivid_red p-3 font-bold rounded-md px-6">
            Post an Ad
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
