import React from 'react';

import ItemsContainer from "../assets/ItemsContainer";
import SocialIcons from "../assets/SocialIcons";
import { Icons } from "../assets/Menus";

export default function Footer() {
  return (
    <footer className="h-auto bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
                  <span className="text-amber-400">ELECT</span> Billy Merrifield
        </h1>
        <div>
         
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2022 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
      </div>
    </footer>
  );
};