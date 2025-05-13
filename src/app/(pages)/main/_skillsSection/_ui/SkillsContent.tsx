'use client';

import { SkillItem as SkillItemProps } from '../_types/skills';
import { SkillItem } from './SkillItem';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export function SkillsContent({ skills }: { skills: SkillItemProps[] }) {
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (itemsRef.current) {
      const skillItems = itemsRef.current.querySelectorAll('.skill-item');
      gsap.set(skillItems, { opacity: 0, y: 30 });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (itemsRef.current) {
              const skillItems =
                itemsRef.current.querySelectorAll('.skill-item');

              gsap.to(skillItems, {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power2.out',
              });
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (itemsRef.current) {
      observer.observe(itemsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [skills]);

  return (
    <div className='flex-1 z-10'>
      <div ref={itemsRef} className='grid grid-cols-2 gap-4'>
        {skills?.map((skill) => (
          <div key={skill.name} className='skill-item'>
            <SkillItem skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}
