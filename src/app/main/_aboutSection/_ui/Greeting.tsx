"use client";

import { AboutParagraph } from "../_types/about";
import { useTextAnimation } from "../_hooks/useTextAnimation";

interface AnimatedTextProps {
  paragraphs: AboutParagraph[];
}

export function Greeting({ paragraphs }: AnimatedTextProps) {
  const { containerRef, setGrayTextRef, setWhiteTextRef } = useTextAnimation({
    delay: 0.5,
    staggerDelay: 0.4,
    textSpeed: 0.03,
    threshold: 0.3,
  });
  return (
    <div className="flex flex-col gap-y-4" ref={containerRef}>
      {paragraphs.map((paragraph, idx) => {
        return (
          <div key={idx} className="relative">
            <p
              ref={setGrayTextRef(idx)}
              className="text-lg text-gray-400 opacity-0 absolute top-0 left-0"
            >
              {paragraph.text}
            </p>
            <p
              ref={setWhiteTextRef(idx)}
              className="text-lg text-white opacity-0 absolute top-0 left-0"
            >
              {paragraph.text}
            </p>
            <p className="text-lg invisible">{paragraph.text}</p>
          </div>
        );
      })}
    </div>
  );
}
