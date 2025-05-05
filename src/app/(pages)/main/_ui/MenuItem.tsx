"use client";

import { useRef, useEffect } from "react";
import { useNeonMenuEffect } from "../_hooks/useNeonMenuEffect";

interface NeonMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  label: string;
  href: string;
}

export function MenuItem({ isOpen, onClose }: NeonMenuProps) {
  const menuItems: MenuItem[] = [
    { label: "about", href: "about" },
    { label: "skills", href: "skills" },
    { label: "projects", href: "projects" },
    { label: "more", href: "more" },
  ];

  const menuItemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    menuItemRefs.current = menuItemRefs.current.slice(0, menuItems.length);
  }, [menuItems.length]);

  useNeonMenuEffect(menuItemRefs, isOpen);

  const handleMenuClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();
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
