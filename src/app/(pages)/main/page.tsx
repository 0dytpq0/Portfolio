import { Menu, NeonTitle } from "./_ui";

export default function Home() {
  return (
    <div className="w-full h-full font-hahmlet">
      <main className="w-full flex flex-col items-center px-8 bg-black text-white h-[100dvh] relative overflow-hidden bg-[url('/bg-img.webp')]">
        <header className="w-full flex items-center justify-end py-4 relative z-20">
          <Menu />
        </header>

        <section className="flex-1 flex flex-col items-center justify-center relative z-20">
          <span className="w-full flex items-center justify-end text-amber-100">
            FRONTEND DEVELOPER
          </span>
          <NeonTitle text="Joseph" />
        </section>
      </main>
    </div>
  );
}
