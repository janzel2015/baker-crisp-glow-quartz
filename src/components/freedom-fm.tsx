import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, CalendarDays, House, Mail, MapPin, MessageCircle, Pause, Play, Radio, Trash2, Info } from "lucide-react";
import {
  COPY,
  DAYS,
  PROGRAMS,
  STATION,
  blocksOn,
  manilaParts,
  onAir,
  type Lang,
} from "@/data/station";

type Note = { id: string; name: string; message: string; at: string };

const NOTES_KEY = "freedom-fm-notes";
const LANG_KEY = "freedom-fm-lang";

const STREAM_URL = import.meta.env.VITE_STREAM_URL as string | undefined;

function formatWhen(start: string, end: string) {
  return `${start}–${end}`;
}

export function FreedomFm() {
  const [lang, setLang] = useState<Lang>("en");
  const [now, setNow] = useState<Date | null>(null);
  const [dayPick, setDayPick] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [streamError, setStreamError] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const storedLang = localStorage.getItem(LANG_KEY);
    if (storedLang === "en" || storedLang === "bi") setLang(storedLang);
    try {
      const raw = localStorage.getItem(NOTES_KEY);
      if (raw) setNotes(JSON.parse(raw) as Note[]);
    } catch {
      /* ignore a bad local note */
    }
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const t = COPY[lang];
  const air = now ? onAir(now) : null;
  const clock = now ? manilaParts(now).clock : "––:––:––";
  const todayIndex = now ? manilaParts(now).day : 0;
  const day = dayPick ?? todayIndex;
  const board = useMemo(() => blocksOn(day), [day]);

  async function toggleListen() {
    const audio = audioRef.current;
    if (!audio || !STREAM_URL) {
      setStreamError("Live stream URL is not configured. Add VITE_STREAM_URL to the deployment environment.");
      return;
    }
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    setStreamError("");
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
      setStreamError("The live stream could not start. Check the stream URL and try again.");
    }
  }

  function switchLang(next: Lang) {
    setLang(next);
    localStorage.setItem(LANG_KEY, next);
  }

  function pinNote(e: FormEvent) {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanMessage = message.trim();
    if (cleanName.length < 2 || cleanMessage.length < 4) {
      setFormError(lang === "en" ? "Add a name and a short note." : "Ibutang ang ngalan ug mubo nga nota.");
      return;
    }
    const next: Note = {
      id: crypto.randomUUID(),
      name: cleanName.slice(0, 40),
      message: cleanMessage.slice(0, 240),
      at: new Date().toISOString(),
    };
    const list = [next, ...notes].slice(0, 12);
    setNotes(list);
    localStorage.setItem(NOTES_KEY, JSON.stringify(list));
    setName("");
    setMessage("");
    setFormError("");
  }

  function removeNote(id: string) {
    const list = notes.filter((n) => n.id !== id);
    setNotes(list);
    localStorage.setItem(NOTES_KEY, JSON.stringify(list));
  }

  const currentTitle = air?.current
    ? lang === "en"
      ? air.current.title
      : air.current.titleBi
    : null;

  return (
    <div className="min-h-screen bg-paper text-ink freedom-broadcast">\n      <audio ref={audioRef} src={STREAM_URL || undefined} preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setPlaying(false); setStreamError("Unable to connect to the live stream."); }} />
      <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl leading-none tracking-tight">104.1</span>
            <span className="text-xs font-medium tracking-widest text-ink/70">FREEDOM FM</span>
          </a>
          <nav className="ml-auto hidden items-center gap-5 text-sm text-ink/80 md:flex">
            <a href="#air" className="hover:text-ink">
              {t.navAir}
            </a>
            <a href="#programs" className="hover:text-ink">
              {t.navPrograms}
            </a>
            <a href="#board" className="hover:text-ink">
              {t.navBoard}
            </a>
            <a href="#station" className="hover:text-ink">
              {t.navStation}
            </a>
            <a href="#line" className="hover:text-ink">
              {t.navLine}
            </a>
          </nav>
          <div className="ml-auto flex items-center gap-2 md:ml-4">
            <div className="flex border border-ink/15 text-xs font-medium">
              <button
                type="button"
                onClick={() => switchLang("en")}
                className={`px-3 py-2 ${lang === "en" ? "bg-ink text-paper" : "text-ink"}`}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => switchLang("bi")}
                className={`px-3 py-2 ${lang === "bi" ? "bg-ink text-paper" : "text-ink"}`}
                aria-pressed={lang === "bi"}
              >
                BI
              </button>
            </div>
            <button
              type="button"
              onClick={toggleListen}
              className="inline-flex min-h-11 items-center gap-2 bg-signal px-4 py-2 text-sm font-medium text-paper"
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
              {playing ? "ON AIR · PAUSE" : "LISTEN LIVE"}
            </button>
          </div>
        </div>
        <nav className="mobile-top-links flex gap-4 overflow-x-auto border-t border-ink/10 px-4 py-2 text-sm text-ink/80 md:hidden">
          <a href="#air" className="shrink-0 py-1">
            {t.navAir}
          </a>
          <a href="#programs" className="shrink-0 py-1">
            {t.navPrograms}
          </a>
          <a href="#board" className="shrink-0 py-1">
            {t.navBoard}
          </a>
          <a href="#station" className="shrink-0 py-1">
            {t.navStation}
          </a>
          <a href="#line" className="shrink-0 py-1">
            {t.navLine}
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-widest text-ink/60">
              {STATION.call} · {STATION.place.toUpperCase()}
            </p>
            <h1 className="mt-4 font-display text-7xl leading-none tracking-tight sm:text-8xl">
              104<span className="text-signal">.</span>1
            </h1>
            <p className="mt-3 font-display text-4xl italic leading-none sm:text-5xl">Freedom FM</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">{t.heroDek}</p>
            <p className="mt-3 text-sm text-ink/60">{t.heroLine}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={toggleListen}
                className="inline-flex min-h-11 items-center gap-2 bg-ink px-5 py-3 text-sm font-medium text-paper"
              >
                <Radio size={16} />
                {playing ? t.replay : t.listen}
              </button>
              {streamError ? <p role="status" className="w-full text-sm text-signal">{streamError}</p> : null}
              <a
                href="#board"
                className="inline-flex min-h-11 items-center px-2 text-sm font-medium underline decoration-ink/30 underline-offset-4"
              >
                {t.navBoard}
              </a>
            </div>
          </div>
          <figure className="lg:col-span-5">
            <img
              src="/station/studio.jpg"
              alt="A broadcast microphone on a wooden desk, with palms beyond the window."
              className="aspect-video w-full object-cover"
            />
            <figcaption className="mt-2 flex items-center justify-between text-xs tracking-wide text-ink/55">
              <span>PAG-ANTAYAN</span>
              <span className="inline-flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${air?.current ? "bg-signal" : "bg-ink/30"}`} />
                {air?.current ? t.onAir : t.rests}
              </span>
            </figcaption>
          </figure>
        </section>

        <section id="air" className="bg-ink text-paper">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
            <div>
              <p className="text-xs tracking-widest text-paper/50">{t.manila}</p>
              <p className="mt-2 font-display text-4xl tabular-nums leading-none">{clock}</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-paper/50">{t.now}</p>
              <p className="mt-2 font-display text-3xl leading-tight">
                {currentTitle ?? t.rests}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">
                {air?.current
                  ? lang === "en"
                    ? air.current.detail
                    : air.current.detailBi
                  : t.off}
              </p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-paper/50">{t.next}</p>
              <p className="mt-2 font-display text-3xl leading-tight">
                {air?.next ? (lang === "en" ? air.next.block.title : air.next.block.titleBi) : "—"}
              </p>
              <p className="mt-2 text-sm text-paper/70">
                {air?.next
                  ? air.next.dayOffset === 0
                    ? air.next.block.start
                    : `${DAYS[(todayIndex + air.next.dayOffset) % 7][lang === "en" ? "longEn" : "longBi"]} · ${air.next.block.start}`
                  : "—"}
              </p>
            </div>
          </div>
          {playing ? (
            <div className="mx-auto flex max-w-6xl items-end gap-1 px-4 pb-6 sm:px-6" aria-hidden>
              {Array.from({ length: 28 }).map((_, i) => (
                <span
                  key={i}
                  className="eq-bar h-8 w-1 bg-signal"
                  style={{ animationDelay: `${(i % 7) * 0.08}s` }}
                />
              ))}
              <p className="ml-4 max-w-xl text-sm leading-relaxed text-paper/80">{streamError || "DXFR 104.1 · LIVE RADIO"}</p>
            </div>
          ) : null}
        </section>

        <section id="clip" className="border-b border-ink/10">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-2">
            <div>
              <p className="text-xs tracking-widest text-ink/50">FACEBOOK</p>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{t.videoTitle}</h2>
              <p className="mt-3 max-w-md text-ink/70">{t.videoDek}</p>
              <a
                href={STATION.video}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-11 items-center text-sm font-medium underline decoration-ink/30 underline-offset-4"
              >
                {t.watch}
              </a>
            </div>
            <div className="booth-clip mx-auto bg-ink/5">
              <iframe
                src={STATION.videoEmbed}
                title="104.1 Freedom Radio on Facebook"
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section id="programs" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">{t.programsTitle}</h2>
            <p className="mt-3 text-ink/70">{t.programsDek}</p>
          </div>
          <div className="mt-8 grid gap-px bg-ink/10 sm:grid-cols-2">
            {PROGRAMS.map((program, index) => (
              <article key={program.id} className="bg-paper p-6">
                <p className="text-xs tracking-widest text-ink/50">
                  0{index + 1} · {lang === "en" ? program.kickerEn : program.kickerBi}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight">{program.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {lang === "en" ? program.bodyEn : program.bodyBi}
                </p>
                <p className="mt-5 text-sm font-medium tabular-nums">
                  {lang === "en" ? program.whenEn : program.whenBi}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="board" className="border-t border-ink/10">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-xl">
                <h2 className="font-display text-4xl leading-tight sm:text-5xl">{t.boardTitle}</h2>
                <p className="mt-3 text-ink/70">{t.boardDek}</p>
              </div>
              <p className="text-sm text-ink/50">{t.manila}</p>
            </div>
            <div className="mt-8 grid grid-cols-7 gap-1">
              {DAYS.map((d) => {
                const active = d.i === day;
                const isToday = d.i === todayIndex;
                return (
                  <button
                    key={d.i}
                    type="button"
                    onClick={() => setDayPick(d.i)}
                    className={`min-h-11 px-1 py-2 text-sm ${
                      active ? "bg-ink text-paper" : "bg-ink/5 text-ink"
                    }`}
                  >
                    <span className="block text-xs tracking-wide">{lang === "en" ? d.en : d.bi}</span>
                    {isToday ? <span className="mt-1 block h-1 bg-signal" /> : null}
                  </button>
                );
              })}
            </div>
            <ol className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
              {board.map((block) => {
                const live = air?.current?.id === block.id && day === todayIndex;
                return (
                  <li key={block.id} className="grid gap-2 py-4 sm:grid-cols-12 sm:items-baseline">
                    <p className="font-medium tabular-nums text-ink sm:col-span-3">
                      {formatWhen(block.start, block.end)}
                    </p>
                    <div className="sm:col-span-9">
                      <p className="font-display text-2xl leading-tight">
                        {live ? <span className="mr-2 text-xs tracking-widest text-signal not-italic">{t.onAir}</span> : null}
                        {lang === "en" ? block.title : block.titleBi}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/70">
                        {lang === "en" ? block.detail : block.detailBi}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section id="station" className="border-t border-ink/10">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2">
            <div>
              <p className="text-xs tracking-widest text-ink/50">{t.aboutAside}</p>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{t.aboutTitle}</h2>
              <p className="mt-5 text-base leading-relaxed text-ink/80">{t.aboutBody}</p>
              <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
                <div>
                  <dt className="text-ink/50">FM</dt>
                  <dd className="mt-1 font-display text-3xl">104.1</dd>
                </div>
                <div>
                  <dt className="text-ink/50">{lang === "en" ? "Since" : "Sukad"}</dt>
                  <dd className="mt-1 font-display text-3xl">2012</dd>
                </div>
              </dl>
            </div>
            <figure>
              <img
                src="/station/coast.jpg"
                alt="A quiet Pacific shoreline with coconut palms and a distant banca."
                className="aspect-video w-full object-cover"
              />
              <figcaption className="mt-2 text-xs tracking-wide text-ink/55">
                SURIGAO DEL SUR · PACIFIC
              </figcaption>
            </figure>
          </div>
          <div className="border-t border-ink/10">
            <div className="mx-auto grid max-w-6xl gap-px bg-ink/10 sm:grid-cols-3">
              <a
                href={STATION.maps}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-24 flex-col justify-between bg-paper p-6 hover:bg-ink/5"
              >
                <MapPin size={18} />
                <span>
                  <span className="block text-xs tracking-widest text-ink/50">{t.visit}</span>
                  <span className="mt-1 block text-sm">{STATION.address}</span>
                </span>
              </a>
              <a
                href={`mailto:${STATION.email}`}
                className="flex min-h-24 flex-col justify-between bg-paper p-6 hover:bg-ink/5"
              >
                <Mail size={18} />
                <span>
                  <span className="block text-xs tracking-widest text-ink/50">{t.write}</span>
                  <span className="mt-1 block text-sm break-all">{STATION.email}</span>
                </span>
              </a>
              <a
                href={STATION.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-24 flex-col justify-between bg-paper p-6 hover:bg-ink/5"
              >
                <ArrowUpRight size={18} />
                <span>
                  <span className="block text-xs tracking-widest text-ink/50">Facebook</span>
                  <span className="mt-1 block text-sm">104.1 Freedom Radio</span>
                </span>
              </a>
            </div>
          </div>
        </section>

        <section id="line" className="border-t border-ink/10">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl leading-tight">{t.lineTitle}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70">{t.lineDek}</p>
              <form onSubmit={pinNote} className="mt-6 grid gap-3">
                <label className="grid gap-1 text-sm">
                  {t.name}
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={40}
                    className="min-h-11 border border-ink/20 bg-paper px-3 text-base outline-none focus:border-ink"
                    name="name"
                    autoComplete="name"
                  />
                </label>
                <label className="grid gap-1 text-sm">
                  {t.message}
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={240}
                    rows={4}
                    className="border border-ink/20 bg-paper px-3 py-3 text-base outline-none focus:border-ink"
                    name="message"
                  />
                </label>
                {formError ? <p className="text-sm text-signal">{formError}</p> : null}
                <button type="submit" className="min-h-11 bg-ink px-4 text-sm font-medium text-paper">
                  {t.send}
                </button>
              </form>
            </div>
            <div>
              <p className="text-xs tracking-widest text-ink/50">{t.pinned}</p>
              {notes.length === 0 ? (
                <p className="mt-4 text-sm text-ink/60">{t.empty}</p>
              ) : (
                <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                  {notes.map((note) => (
                    <li key={note.id} className="flex items-start gap-3 py-4">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">{note.name}</p>
                        <p className="mt-1 text-sm leading-relaxed text-ink/75">{note.message}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeNote(note.id)}
                        className="inline-flex min-h-11 min-w-11 items-center justify-center text-ink/50 hover:text-ink"
                        aria-label={t.remove}
                      >
                        <Trash2 size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      </main>

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">\n        <a href="#top"><House size={19} /><span>Home</span></a>\n        <a href="#board"><CalendarDays size={19} /><span>Schedule</span></a>\n        <a href="#line"><MessageCircle size={19} /><span>Messages</span></a>\n        <a href="#station"><Info size={19} /><span>Station</span></a>\n      </nav>\n      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            {STATION.call} {STATION.frequency} {STATION.name}
          </p>
          <a href={STATION.web} target="_blank" rel="noreferrer" className="underline underline-offset-4">
            {STATION.webLabel}
          </a>
        </div>
        <p className="mx-auto max-w-6xl px-4 pb-10 text-xs leading-relaxed text-ink/45 sm:px-6">{t.footerNote}</p>
      </footer>
    </div>
  );
}
