import { aboutParagraphs, contactItems } from '../_data/about';
import { Greeting } from './Greeting';
import { ContactList } from './ContactList';

export function AboutSection() {
  return (
    <section
      id='about'
      className='w-full h-[100dvh] flex flex-col items-center justify-center px-8 text-white snap-start'
    >
      <div className='max-w-4xl w-full py-16 bg-black rounded-xl px-8 shadow-[0_0_70px_#0066ff] z-10'>
        <h2 className='text-4xl font-bold mb-8 text-blue-400 font-loopet'>
          About Me
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-8'>
          <Greeting paragraphs={aboutParagraphs} />
          <ContactList items={contactItems} />
        </div>
      </div>
    </section>
  );
}

