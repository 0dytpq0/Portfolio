import React from "react";
import { BsArrowDown } from "react-icons/bs";
import Menu from "./Menu";
import NeonTitle from "./NeonTitle";

export function MainSection() {
  return (
    <section className="w-full h-[100dvh] flex flex-col items-center px-8 bg-black text-white relative snap-start bg-[url('/bg-img.webp')] bg-cover bg-center">
      <header className="w-full flex items-center justify-end py-4 relative z-20">
        <Menu />
      </header>

      <div className="flex-1 flex flex-col items-center justify-center relative z-20">
        <span className="w-full flex items-center justify-end text-amber-100">
          FRONTEND DEVELOPER
        </span>
        <NeonTitle text="Joseph" />
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <BsArrowDown size={24} color="white" />
      </div>
    </section>
  );
}
