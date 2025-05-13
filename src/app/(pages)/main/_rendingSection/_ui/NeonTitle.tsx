"use client";

import { useRef } from "react";
import { useNeonTitleEffect } from "../_hooks/useNeonTitleEffect";

interface NeonTextProps {
  text: string;
}

export default function NeonTitle({ text }: NeonTextProps) {
  const sElementRef = useRef<HTMLSpanElement>(null);
  const pElementRef = useRef<HTMLSpanElement>(null);

  useNeonTitleEffect(sElementRef, pElementRef);

  const renderText = () => {
    return text.split("").map((char, index) => {
      if (char.toLowerCase() === "s") {
        return (
          <span key={index} ref={sElementRef}>
            {char}
          </span>
        );
      } else if (char.toLowerCase() === "p") {
        return (
          <span key={index} ref={pElementRef}>
            {char}
          </span>
        );
      } else {
        return <span key={index}>{char}</span>;
      }
    });
  };

  return (
    <div className="relative">
      <h1 className="text-[170px] font-loopet text-shadow-[0_0_21px_#fff,0_0_21px_#fff,0_0_42px_#0066ff,0_0_56px_#0066ff]">
        {renderText()}
      </h1>
    </div>
  );
}
