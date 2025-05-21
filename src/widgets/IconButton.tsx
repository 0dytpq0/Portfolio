import Image from 'next/image';

interface IconButtonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  address: string;
}

export default function IconButton({
  src,
  alt,
  width,
  height,
  address,
}: IconButtonProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      onClick={() => {
        window.open(address, '_blank');
      }}
      height={height}
      className=' transition-all duration-300 hover:invert-[0.2] cursor-pointer'
    />
  );
}
