"use client";

import { ContactItem as ContactItemType } from "../_types/about";
import { useTextAnimation } from "../_hooks/useTextAnimation";
import { ContactItem } from "./ContactItem";

interface ContactListProps {
  items: ContactItemType[];
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
          {items.map((item, idx) => (
            <ContactItem
              key={item.label}
              item={item}
              grayTextRef={setGrayTextRef(idx)}
              whiteTextRef={setWhiteTextRef(idx)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
