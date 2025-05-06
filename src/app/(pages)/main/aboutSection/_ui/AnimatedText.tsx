"use client";

import { ReactNode } from "react";

interface AnimatedTextProps {
  text: string;
  index: number;
  setGrayTextRef: (index: number) => (el: HTMLParagraphElement | null) => void;
  setWhiteTextRef: (index: number) => (el: HTMLParagraphElement | null) => void;
  className?: string;
  children?: ReactNode;
}

export function AnimatedText({
  text,
  index,
  setGrayTextRef,
  setWhiteTextRef,
  className = "",
  children,
}: AnimatedTextProps) {
  return (
    <div className={`relative ${className}`}>
      <p
        ref={setGrayTextRef(index)}
        className="text-lg text-gray-400 opacity-0 absolute top-0 left-0"
      >
        {text}
      </p>
      <p
        ref={setWhiteTextRef(index)}
        className="text-lg text-white opacity-0 absolute top-0 left-0"
      >
        {text}
      </p>
      {/* 공간 확보를 위한 보이지 않는 텍스트 */}
      <p className="text-lg invisible">{text}</p>
      {children}
    </div>
  );
}
