"use client";

import { useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { MenuItem } from "./MenuItem";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="relative z-30 text-white focus:outline-none hover:cursor-pointer"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <BsX size={24} /> : <BsList size={24} />}
        <MenuItem isOpen={isOpen} />
      </button>
    </>
  );
}
