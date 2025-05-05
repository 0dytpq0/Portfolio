import Link from "next/link";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full h-[100dvh] flex flex-col items-center justify-center px-8 bg-black text-white snap-start"
    >
      <div className="max-w-4xl w-full py-16 bg-[rgba(55,55,55,0.4)] rounded-xl px-8 shadow-[0_0_70px_#0066ff]">
        <h2 className="text-4xl font-bold mb-8 text-blue-400 font-loopet">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              안녕하세요, 프론트엔드 개발자 박요셉입니다.
            </p>
            <p className="text-lg mb-4">
              이타적인 성격과 높은 친화력을 바탕으로 팀원들과 원활하게 소통하며
              협업하기 위해 노력합니다.
            </p>
            <p className="text-lg">
              문제를 미리 예방할 수 있도록 고심하며 개발하고, UX/UI를 기반으로
              최적의 사용자 경험을 제공하기 위해 노력합니다.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-loopet font-semibold mb-4 text-blue-300">
                Contact
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Email : rkfnahs12e@gmail.com</li>
                <li>Phone : 010-3146-0962</li>
                <li>
                  <Link
                    className="text-blue-300 cursor-pointer hover:text-blue-500"
                    href="https://github.com/0dytpq0"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-300 cursor-pointer hover:text-blue-500"
                    href="https://velog.io/@0dytpq0/posts"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
