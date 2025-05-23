import NeonTitle from './NeonTitle';
import Menu from './Menu';
import RendingOverlay from './RendingOverlay';
import Subtitle from './Subtitle';
import { BsArrowDown } from 'react-icons/bs';

export function RendingSection() {
  return (
    <section className="w-full h-[100dvh] flex flex-col items-center px-8 text-white relative snap-start bg-[url('/bg-img.webp')] bg-cover bg-center">
      <RendingOverlay />
      <header className='w-full flex items-center justify-end py-4 relative z-20'>
        <Menu />
      </header>
      <div className='flex-1 flex flex-col items-center justify-center relative z-20'>
        <Subtitle />
        <NeonTitle text='Joseph' />
      </div>
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30'>
        <BsArrowDown size={24} color='white' />
      </div>
    </section>
  );
}
