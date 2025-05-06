"use client";

import Link from "next/link";
import { ContactItem } from "../_data/about";
import { useTextAnimation } from "../_hooks/useTextAnimation";

interface ContactListProps {
  items: ContactItem[];
}

export function ContactList({ items }: ContactListProps) {
  const { containerRef, setGrayTextRef, setWhiteTextRef } = useTextAnimation({
    delay: 0.5,
    staggerDelay: 0.4,
    textSpeed: 0.03,
    threshold: 0.3,
  });
  return (
    <div ref={containerRef} className="flex flex-col justify-center">
      <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-500/30">
        <h3 className="text-xl font-loopet font-semibold mb-4 text-blue-300">
          Contact
        </h3>
        {/* 연락처 섹션 */}
        <ul className="space-y-2">
          {items.map((item, idx) => {
            return (
              <li key={item.label} className="relative">
                <div className="relative">
                  <span
                    ref={setGrayTextRef(idx)}
                    className="text-gray-400 opacity-0 absolute top-0 left-0"
                  >
                    {item.link ? (
                      <Link
                        className="text-blue-300 cursor-pointer hover:text-blue-500"
                        href={item.link}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      `${item.label} : ${item.value}`
                    )}
                  </span>

                  <span
                    ref={setWhiteTextRef(idx)}
                    className="opacity-0 absolute top-0 left-0"
                  >
                    {item.link ? (
                      <Link
                        className="text-blue-300 cursor-pointer hover:text-blue-500"
                        href={item.link}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      `${item.label} : ${item.value}`
                    )}
                  </span>

                  {/* 공간 확보용 */}
                  <span className="invisible">
                    {item.link ? (
                      <Link
                        className="text-blue-300 cursor-pointer hover:text-blue-500"
                        href={item.link}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      `${item.label} : ${item.value}`
                    )}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
