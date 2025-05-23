import type { Metadata } from 'next';
import { Hahmlet, Playwrite_DK_Loopet } from 'next/font/google';
import '../globals.css';

const hahmlet = Hahmlet({
  variable: '--font-hahmlet',
  weight: ['300', '400', '700'],
  subsets: ['latin', 'latin-ext', 'vietnamese'],
});
const loopet = Playwrite_DK_Loopet({
  variable: '--font-loopet',
  weight: ['100', '200', '300', '400'],
});

export const metadata: Metadata = {
  title: 'Joseph Park | 박요셉 포트폴리오',
  description: '프론트엔드 개발자 박요셉(Joseph Park)의 포트폴리오.',
  keywords: [
    '박요셉',
    'Joseph Park',
    '프론트엔드',
    'Frontend',
    'React',
    'Next.js',
    '포트폴리오',
    '웹 개발자',
    'GSAP',
    'UI/UX',
    'Typescript',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${hahmlet.variable} ${loopet.variable} antialiased w-dvw h-dvh min-w-[1360px]`}
      >
        {children}
      </body>
    </html>
  );
}

