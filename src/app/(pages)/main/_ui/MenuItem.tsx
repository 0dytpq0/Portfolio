"use client";

import { useRef } from "react";
import { useNeonMenuEffect } from "../_hooks/useNeonMenuEffect";
import { menuItems } from "../_data/main";

interface NeonMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuItem({ isOpen, onClose }: NeonMenuProps) {
  const menuItemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useNeonMenuEffect(menuItemRefs, isOpen);

  const handleMenuClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();
    e.stopPropagation();

    onClose();
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className={`absolute top-8 right-8 flex flex-col items-end gap-6 z-30 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{ background: "transparent" }}
    >
      {menuItems.map((item, index) => (
        <button
          key={item.label}
          onClick={(e) => handleMenuClick(e, item.href)}
          ref={(el) => {
            if (menuItemRefs.current) {
              menuItemRefs.current[index] = el;
            }
          }}
          className="text-[24px] font-hahmlet opacity-0 text-shadow-[0_0_21px_#fff,0_0_42px_#0066ff,0_0_80px_#0066ff] cursor-pointer"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
