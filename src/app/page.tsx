import Link from "next/link";

const NAV = [
  { label: "Games", href: "#games" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const VALUES = [
  {
    title: "재미가 먼저",
    desc: "기술이나 트렌드보다 '한 번 더 하고 싶은' 손맛을 먼저 설계합니다.",
  },
  {
    title: "작게, 빠르게",
    desc: "아이디어를 빠르게 플레이 가능한 형태로 만들어 직접 검증합니다.",
  },
  {
    title: "오래 남는 경험",
    desc: "잠깐의 자극이 아니라 다시 떠올리게 되는 게임을 지향합니다.",
  },
];

const GAMES = [
  {
    name: "Toy Up!",
    genre: "모바일 · 복셀 액션",
    status: "개발 중",
    desc: "귀여운 복셀 고양이가 장난감 가게를 튀어 오르며 콤보를 쌓는 모바일 점프 액션 게임.",
    gradient: "from-accent-3/40 via-accent-pink/30 to-accent-2/40",
    image: "/games/toyup/banner.png",
  },
  {
    name: "모모의 마법농장",
    genre: "메이플스토리 월드",
    status: "개발 중",
    desc: "메이플스토리 월드에서 즐기는, 마법으로 가꾸는 아기자기한 농장·낚시·채집 라이프 게임.",
    gradient: "from-accent-violet/40 via-accent-2/30 to-accent-pink/30",
    image: "/games/momo/farm.png",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="#top" className="text-lg font-extrabold tracking-tight">
            다뉴비<span className="text-accent">스튜디오</span>
          </Link>
          <ul className="hidden gap-8 text-sm font-medium text-black/60 sm:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-black">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            문의하기
          </a>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[-12%] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent-3/40 blur-[120px]" />
            <div className="absolute right-[8%] top-[28%] h-[340px] w-[340px] rounded-full bg-accent-2/30 blur-[120px]" />
            <div className="absolute left-[6%] top-[40%] h-[300px] w-[300px] rounded-full bg-accent-pink/30 blur-[120px]" />
          </div>
          <div className="mx-auto max-w-6xl px-6 py-28 sm:py-40">
            <p className="mb-5 inline-block rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold text-black/60 shadow-sm">
              🎮 Game Studio · Est. 2026
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              새로운 재미를{" "}
              <span className="bg-gradient-to-r from-accent via-accent-pink to-accent-2 bg-clip-text text-transparent">
                만드는 사람들
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-black/60">
              다뉴비스튜디오는 한 번 더 하고 싶어지는 게임을 만듭니다. 작게
              시작해 빠르게 만들고, 직접 플레이하며 다듬습니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#games"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                우리가 만드는 게임
              </a>
              <a
                href="#about"
                className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-black/70 shadow-sm transition hover:bg-black/[0.03]"
              >
                스튜디오 소개
              </a>
            </div>
          </div>
        </section>

        {/* Games */}
        <section id="games" className="border-t border-black/[0.06] py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Our Games
              </h2>
              <p className="mt-3 text-black/60">
                지금 만들고 있는 게임들을 소개합니다.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {GAMES.map((game) => (
                <article
                  key={game.name}
                  className="group overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className={`relative aspect-[16/9] bg-gradient-to-br ${game.gradient}`}
                  >
                    {game.image && (
                      <div
                        className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${game.image})` }}
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold">{game.name}</h3>
                      <span className="rounded-full bg-accent-2/15 px-3 py-1 text-xs font-semibold text-accent-2">
                        {game.status}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-black/40">
                      {game.genre}
                    </p>
                    <p className="mt-3 text-black/60">{game.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About / Vision */}
        <section id="about" className="border-t border-black/[0.06] py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              작은 스튜디오, 분명한 방향
            </h2>
            <p className="mt-4 max-w-2xl text-black/60">
              다뉴비스튜디오는 2026년 시작한 게임 스튜디오입니다. 거창한 규모
              대신, 플레이어가 진짜 즐거워하는 한 가지를 잘 만드는 데
              집중합니다.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-accent">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers */}
        <section id="careers" className="border-t border-black/[0.06] py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl border border-black/[0.06] bg-gradient-to-br from-accent-3/20 via-white to-accent-2/15 p-10 shadow-sm sm:p-14">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                함께 만들 사람을 찾습니다
              </h2>
              <p className="mt-4 max-w-xl text-black/60">
                재미를 진지하게 고민하는 동료를 기다립니다. 기획, 프로그래밍,
                아트 — 게임을 사랑한다면 언제든 연락 주세요.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                지원/문의하기
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-black/[0.06] py-24">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Contact
            </h2>
            <p className="mt-3 text-black/60">
              제휴 · 퍼블리싱 · 채용 등 어떤 문의든 환영합니다.
            </p>
            <form
              action="https://formspree.io/f/mykvrkjj"
              method="POST"
              className="mt-8 flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="이름"
                required
                className="rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black/80 outline-none transition placeholder:text-black/40 focus:border-accent"
              />
              <input
                type="email"
                name="email"
                placeholder="이메일"
                required
                className="rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black/80 outline-none transition placeholder:text-black/40 focus:border-accent"
              />
              <textarea
                name="message"
                placeholder="문의 내용"
                rows={5}
                required
                className="resize-none rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black/80 outline-none transition placeholder:text-black/40 focus:border-accent"
              />
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                보내기
              </button>
            </form>
            <p className="mt-6 text-sm text-black/40">
              또는 이메일:{" "}
              <a
                href="mailto:hopeful1213@gmail.com"
                className="font-medium text-accent-2 hover:underline"
              >
                hopeful1213@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/[0.06] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-black/40 sm:flex-row">
          <p>© 2026 다뉴비스튜디오 (Danewbie Studio). All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-black">
              YouTube
            </a>
            <a href="#" className="transition hover:text-black">
              X
            </a>
            <a href="#" className="transition hover:text-black">
              Discord
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
