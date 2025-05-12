'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRightShort } from 'react-icons/bs';
import { ReactNode, forwardRef } from 'react';

interface InfoBoxProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: ReactNode;
  initialStyle: object;
}

export const InfoBox = forwardRef<HTMLDivElement, InfoBoxProps>(
  ({ href, imageSrc, imageAlt, title, initialStyle }, ref) => {
    return (
      <div
        ref={ref}
        className='relative'
        style={{
          ...initialStyle,
          boxShadow: '0 0 30px #0066ff',
        }}
      >
        <Link
          href={href}
          className='group block w-[500px] h-[300px] relative aspect-video overflow-hidden rounded-lg shadow-lg transition-all duration-300'
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className='object-cover'
            priority={true}
          />
          <div className='split absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300'></div>
          {typeof title === 'string' ? (
            <span className='split absolute top-4 left-4 text-white text-3xl font-loopet opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              {title}
            </span>
          ) : (
            <div className='split absolute flex flex-col gap-y-4 top-4 left-4 text-white text-3xl font-loopet opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              {title}
            </div>
          )}
          <div className='absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <BsArrowRightShort size={80} color='white' />
          </div>
        </Link>
      </div>
    );
  }
);

// displayName 추가
InfoBox.displayName = 'InfoBox';
