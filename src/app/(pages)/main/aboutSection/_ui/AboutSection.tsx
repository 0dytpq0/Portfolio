"use client";

import { aboutParagraphs, contactItems } from "../_data/about";
import { useTextAnimation } from "../_hooks/useTextAnimation";
import { AnimatedText } from "./AnimatedText";
import { ContactList } from "./ContactList";

export function AboutSection() {
  // 텍스트 애니메이션 훅 사용
  const {
    containerRef: leftSectionRef,
    setGrayTextRef: leftGrayRef,
    setWhiteTextRef: leftWhiteRef,
  } = useTextAnimation({
    delay: 0.5,
    staggerDelay: 0.4,
    textSpeed: 0.03,
    threshold: 0.3,
  });

  return (
    <section
      id="about"
      className="w-full h-[100dvh] flex flex-col items-center justify-center px-8 bg-black text-white snap-start"
    >
      <div
        ref={leftSectionRef}
        className="max-w-4xl w-full py-16 bg-[rgba(55,55,55,0.4)] rounded-xl px-8 shadow-[0_0_70px_#0066ff]"
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-400 font-loopet">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/* 소개 텍스트 섹션 */}
            {aboutParagraphs.map((paragraph, index) => (
              <AnimatedText
                key={index}
                text={paragraph.text}
                index={index}
                setGrayTextRef={leftGrayRef}
                setWhiteTextRef={leftWhiteRef}
                className={index < aboutParagraphs.length - 1 ? "mb-4" : ""}
              />
            ))}
          </div>
          <ContactList items={contactItems} />
        </div>
      </div>
    </section>
  );
}
