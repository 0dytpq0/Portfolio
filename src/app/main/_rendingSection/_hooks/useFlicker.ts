'use client';

import { shuffleArray } from '@/shared/lib/shuffleArray';
import gsap from 'gsap';

const flickerPoints = [
  { percentage: 0, opacity: 0 },
  { percentage: 15, opacity: 1 },
  { percentage: 30, opacity: 0 },
  { percentage: 45, opacity: 1 },
  { percentage: 60, opacity: 0 },
  { percentage: 75, opacity: 1 },
  { percentage: 100, opacity: 1 },
];

const createSingleElementFlickerTimeline = (
  element: HTMLElement,
  duration: number
) => {
  const timeline = gsap.timeline();

  gsap.set(element, { opacity: 0 });

  flickerPoints.forEach(({ percentage, opacity }, index) => {
    const stepDuration =
      ((percentage - (flickerPoints[index - 1]?.percentage ?? 0)) / 100) *
      duration;

    timeline.add(
      gsap.to(element, {
        opacity,
        duration: stepDuration,
        ease: 'none',
      })
    );
  });

  return timeline;
};

export const flickerIn = (
  elements: Array<HTMLElement>,
  duration = 3,
  stegger = 0.03
): gsap.core.Timeline => {
  const singleElDuration = duration - (elements.length - 1) * stegger;
  const timeline = gsap.timeline();
  const shuffledEl = shuffleArray<HTMLElement>(elements);

  shuffledEl.forEach((el, index) => {
    const singleElTimeLine = createSingleElementFlickerTimeline(
      el,
      singleElDuration
    );
    timeline.add(singleElTimeLine, index * stegger);
  });

  return timeline;
};
