import { useState, useEffect, RefObject } from 'react';

export function useTabIndicator<T extends string>(
  categories: T[],
  buttonRefs: Record<T, RefObject<HTMLButtonElement | null>>
) {
  const [buttonWidths, setButtonWidths] = useState<{ [key: string]: number }>({});
  const [buttonPositions, setButtonPositions] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const updateWidths = () => {
      const newWidths: { [key: string]: number } = {};
      const newPositions: { [key: string]: number } = {};
      let position = 0;

      categories.forEach((category) => {
        const button = buttonRefs[category]?.current;
        if (button) {
          const width = button.offsetWidth;
          newWidths[category] = width;
          newPositions[category] = position;
          position += width;
        }
      });

      setButtonWidths(newWidths);
      setButtonPositions(newPositions);
    };

    // Initial measurement
    updateWidths();

    // Add resize listener to handle window size changes
    window.addEventListener("resize", updateWidths);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateWidths);
    };
  }, [categories, buttonRefs]);

  const getIndicatorStyle = (activeCategory: T) => {
    return {
      width: buttonWidths[activeCategory]
        ? `${buttonWidths[activeCategory]}px`
        : "0",
      left: buttonPositions[activeCategory]
        ? `${buttonPositions[activeCategory]}px`
        : "0",
      transition: "all 0.3s ease-in-out",
    };
  };

  return { getIndicatorStyle };
}
