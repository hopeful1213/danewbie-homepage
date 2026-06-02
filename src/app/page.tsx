import Link from "next/link";

const NAV = [
  { label: "Games", href: "#games" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const VALUES = [
  {
    title: "Fun First",
    desc: "We design for that 'one more time' feeling before chasing tech or trends.",
  },
  {
    title: "Small & Fast",
    desc: "We turn ideas into playable builds quickly, then test them ourselves.",
  },
  {
    title: "Lasting Experiences",
    desc: "We aim for games you remember, not just momentary thrills.",
  },
];

const GAMES = [
  {
    name: "Toy Up!",
    genre: "Mobile · Voxel Action",
    status: "In Development",
    desc: "A mobile jump-action game where a cute voxel cat bounces through a toy shop, stacking combos.",
    gradient: "from-accent-3/40 via-accent-pink/30 to-accent-2/40",
    image: "/games/toyup/banner.png",
  },
  {
    name: "Momo's Magic Farm",
    genre: "MapleStory Worlds",
    status: "In Development",
    desc: "A cozy farming, fishing, and gathering life game powered by magic, built on MapleStory Worlds.",
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
            Danewbie<span className="text-accent"> Studio</span>
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
            Get in Touch
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
              We make games you&apos;ll want to{" "}
              <span className="bg-gradient-to-r from-accent via-accent-pink to-accent-2 bg-clip-text text-transparent">
                play again
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-black/60">
              Danewbie Studio builds games you&apos;ll want to come back to. We
              start small, build fast, and refine them by playing them
              ourselves.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#games"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Our Games
              </a>
              <a
                href="#about"
                className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-black/70 shadow-sm transition hover:bg-black/[0.03]"
              >
                About Us
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
                The games we&apos;re building right now.
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
              A small studio with a clear direction
            </h2>
            <p className="mt-4 max-w-2xl text-black/60">
              Danewbie Studio is a game studio founded in 2026. Instead of
              chasing scale, we focus on doing one thing well — making something
              players genuinely love.
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
                We&apos;re looking for people to build with
              </h2>
              <p className="mt-4 max-w-xl text-black/60">
                We want teammates who take fun seriously. Design, programming,
                art — if you love games, reach out anytime.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Apply / Get in Touch
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
              Partnership, publishing, careers — any inquiry is welcome.
            </p>
            <form
              action="https://formspree.io/f/mykvrkjj"
              method="POST"
              className="mt-8 flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black/80 outline-none transition placeholder:text-black/40 focus:border-accent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black/80 outline-none transition placeholder:text-black/40 focus:border-accent"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                required
                className="resize-none rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black/80 outline-none transition placeholder:text-black/40 focus:border-accent"
              />
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Send
              </button>
            </form>
            <p className="mt-6 text-sm text-black/40">
              Or email us at:{" "}
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
          <p>© 2026 Danewbie Studio. All rights reserved.</p>
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
