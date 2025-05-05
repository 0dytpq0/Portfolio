"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { useNeonMenuEffect } from "../_hooks/useNeonMenuEffect";

interface NeonMenuProps {
  isOpen: boolean;
}

interface MenuItem {
  label: string;
  href: string;
}

export function MenuItem({ isOpen }: NeonMenuProps) {
  const menuItems: MenuItem[] = [
    { label: "about", href: "#about" },
    { label: "stacks", href: "#stacks" },
    { label: "projects", href: "#projects" },
    { label: "more", href: "#more" },
  ];

  // 각 메뉴 아이템에 대한 ref 배열 생성
  const menuItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // 메뉴 아이템 ref 초기화
  useEffect(() => {
    menuItemRefs.current = menuItemRefs.current.slice(0, menuItems.length);
  }, [menuItems.length]);

  // 네온 메뉴 애니메이션 훅 사용
  useNeonMenuEffect(menuItemRefs, isOpen);

  return (
    <div
      className={`absolute top-8 right-8 flex flex-col items-end gap-6 z-30 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{ background: "transparent" }}
    >
      {menuItems.map((item, index) => (
        <Link
          key={item.label}
          href={item.href}
          ref={(el) => {
            if (menuItemRefs.current) {
              menuItemRefs.current[index] = el;
            }
          }}
          className="text-[24px] font-hahmlet opacity-0 text-shadow-[0_0_21px_#fff,0_0_42px_#0066ff,0_0_80px_#0066ff]"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
