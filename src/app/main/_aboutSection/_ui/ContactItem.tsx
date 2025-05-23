"use client";

import Link from "next/link";
import { ContactItem as ContactItemType } from "../_types/about";

interface ContactItemProps {
  item: ContactItemType;
  grayTextRef: (node: HTMLParagraphElement | HTMLAnchorElement | null) => void;
  whiteTextRef: (node: HTMLParagraphElement | HTMLAnchorElement | null) => void;
}

export function ContactItem({
  item,
  grayTextRef,
  whiteTextRef,
}: ContactItemProps) {
  const content = item.link ? (
    <>
      <Link
        className="text-gray-400 opacity-0 absolute top-0 left-0 m-0"
        ref={grayTextRef}
        href={item.link}
      >
        {item.value}
      </Link>
      <Link
        className="text-white opacity-0 absolute top-0 left-0 m-0 hover:text-sky-300 transition-colors cursor-pointer underline"
        ref={whiteTextRef}
        href={item.link}
      >
        {item.value}
      </Link>
      <p className="invisible m-0">{item.value}</p>
    </>
  ) : (
    <>
      <p
        className="text-gray-400 opacity-0 absolute top-0 left-0 m-0"
        ref={grayTextRef}
      >
        {item.label} : {item.value}
      </p>
      <p
        className="text-white opacity-0 absolute top-0 left-0 m-0"
        ref={whiteTextRef}
      >
        {item.label} : {item.value}
      </p>
      <p className="invisible m-0">
        {item.label} : {item.value}
      </p>
    </>
  );

  return <li className="relative">{content}</li>;
}
