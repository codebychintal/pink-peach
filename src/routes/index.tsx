import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Plus, Star, Instagram } from "lucide-react";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import brandIdentityAsset from "@/assets/brand-identity.jpg";
import contentProductionAsset from "@/assets/content-production.jpg";
import postProductionAsset from "@/assets/post-production.jpg";
import advertisingAsset from "@/assets/advertising.jpg";
import testimonial1Asset from "@/assets/testimonial-1.png";
import testimonial2Asset from "@/assets/testimonial-2.jpg";
import testimonial3Asset from "@/assets/testimonial-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const Asterisk = ({ className = "", size = 20 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M12 2v20M4.2 6L19.8 18M4.2 18L19.8 6M2 12h20"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-ivory/70 border-b border-black/5" : ""
      }`}
    >
      <nav className="container-x flex items-center justify-between py-5">
        <a href="#" className="flex items-baseline gap-0 font-display text-2xl font-bold tracking-tight lowercase leading-none">
          <span className="text-orange">pink</span>
          <span className="text-orange">peach</span>
        </a>
        <div className="hidden md:flex items-center gap-9 text-[0.8125rem] uppercase tracking-[0.12em] font-medium">
          <a href="#work" className="hover:text-orange transition-colors">Work</a>
          <a href="#services" className="hover:text-orange transition-colors">Services</a>
          <a href="#about" className="hover:text-orange transition-colors">About</a>
          <a href="#contact" className="hover:text-orange transition-colors">Contact</a>
        </div>
        <a href="#contact" className="btn-primary text-[0.75rem]">
          Let's Get Peachy <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}

const HERO_CARDS = [
  { src: hero1, x: -460, y: -130, rot: -15, w: 200, delay: 0.1 },
  { src: hero2, x: 420, y: -160, rot: 12, w: 220, delay: 0.18 },
  { src: hero3, x: -540, y: 110, rot: 8, w: 190, delay: 0.26 },
  { src: hero4, x: 500, y: 140, rot: -10, w: 200, delay: 0.34 },
  { src: hero5, x: -320, y: 240, rot: -4, w: 170, delay: 0.42 },
  { src: hero6, x: 320, y: -280, rot: 18, w: 170, delay: 0.5 },
];

function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32 md:pt-48 md:pb-44">
      {/* decorative orange asterisk top-left */}
      <div className="absolute left-6 top-28 hidden md:block text-orange spin-slow">
        <Asterisk size={48} />
      </div>
      <div className="absolute right-10 top-32 hidden md:block">
        <span className="pill text-olive">* Independent Creative Studio</span>
      </div>

      <div
        className="container-x relative"
        style={{ perspective: "3000px" }}
      >
        <div className="relative mx-auto flex min-h-[34rem] max-w-5xl items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
          {HERO_CARDS.map((c, i) => (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0, rotate: 0, scale: 0.4, opacity: 0 }}
              animate={{ x: c.x, y: c.y, rotate: c.rot, scale: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: c.delay, ease: [0.22, 1, 0.36, 1] }}
              className="absolute hidden md:block image-hover shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]"
              style={{ width: c.w, height: c.w * 1.25, willChange: "transform" }}
            >
              <img src={c.src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </motion.div>
          ))}

          {/* center content */}
          <div className="relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pill mb-8 text-olive"
            >
              <Asterisk size={10} className="text-orange" /> Creative Media Agency
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="font-display"
            >
              Creative Media <br />
              for <em className="not-italic text-orange">Bold</em> Brands.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mx-auto mt-7 max-w-md text-base text-olive"
            >
              We build brands that don't just look good — they get remembered, shared, and talked about. From strategy to screen, we make it happen.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-4"
            >
              <a href="#contact" className="btn-primary">
                Launch Your Brand <ArrowUpRight size={16} />
              </a>
              <a href="#work" className="arrow-link text-noir">
                See Our Work <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const MARQUEE_ITEMS = [
  "Art Direction",
  "Branding",
  "Content Creation",
  "Editing",
  "Advertising Campaigns",
  "Social Media",
  "Visual Identity",
  "Storytelling",
];

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section className="border-y border-black/10 bg-ivory py-8 overflow-hidden">
      <div className="marquee-track items-center">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-display text-[2.5rem] md:text-[3.75rem] leading-none font-medium whitespace-nowrap">
              {t}
            </span>
            <Asterisk className="text-orange spin-slow shrink-0" size={32} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ImageMarquee() {
  const imgs = [hero1, hero2, hero3, hero4, hero5, hero6, hero1, hero2];
  const items = [...imgs, ...imgs];
  return (
    <section className="bg-ivory py-6 overflow-hidden">
      <div className="marquee-track marquee-fast">
        {items.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="h-32 w-[9.5rem] shrink-0 rounded object-cover"
          />
        ))}
      </div>
    </section>
  );
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref} className="font-display tabular-nums">
      {val}
      {suffix}
    </span>
  );
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="bg-ivory py-32 md:py-40">
      <div className="container-sm">
        <FadeUp>
          <div className="flex items-center gap-3 mb-10">
            <Asterisk className="text-orange" size={18} />
            <span className="eyebrow text-olive">A Little About Us</span>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-4xl">
            We're a small team of designers, strategists, and storytellers building brands the world actually
            <span className="text-orange"> remembers.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-olive leading-relaxed">
            Pink Peach was born from a simple belief: great creative work changes how people feel about a brand. We combine sharp strategy with bold visual craft to help businesses stand out in a world that's already too loud. Whether you're launching from scratch or ready for a rebrand, we bring the ideas, the execution, and the obsession.
          </p>
        </FadeUp>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          <FadeUp delay={0.05}>
            <div>
              <div className="text-6xl md:text-7xl font-display font-semibold leading-none">
                <CountUp to={100} suffix="%" />
              </div>
              <p className="mt-3 eyebrow text-olive">Client Satisfaction Rate</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div>
              <div className="text-6xl md:text-7xl font-display font-semibold leading-none">
                <CountUp to={40} suffix="+" />
              </div>
              <p className="mt-3 eyebrow text-olive">Brands Transformed</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.25}>
            <div>
              <div className="text-6xl md:text-7xl font-display font-semibold leading-none">
                <CountUp to={5} />
              </div>
              <p className="mt-3 eyebrow text-olive">Industry Awards</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

const WORKS = [
  { img: brandIdentityAsset, title: "Brand Identity", tag: "Strategy & Visual Systems", h: "tall", slug: "brand-identity" },
  { img: contentProductionAsset, title: "Content Production", tag: "Photo, Video & Copy", h: "short", slug: "content-production" },
  { img: postProductionAsset, title: "Post-Production & Editing", tag: "Edit, Grade & Motion", h: "short", slug: "post-production" },
  { img: advertisingAsset, title: "Advertising Campaigns", tag: "Digital & OOH Campaigns", h: "tall", slug: "advertising" },
];

function Work() {
  return (
    <section id="work" className="bg-ivory pb-32">
      <div className="container-x">
        <FadeUp>
          <div className="flex flex-wrap items-end gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Asterisk className="text-orange" size={18} />
                <span className="eyebrow text-olive">Featured Work</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl max-w-2xl">
                Selected projects from a peachy archive.
              </h2>
            </div>
          </div>
        </FadeUp>

        <div className="grid gap-6 md:grid-cols-2">
          {WORKS.map((w, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <Link to="/services/$slug" params={{ slug: w.slug }} className="group block">
                <div
                  className={`image-hover ${w.h === "tall" ? "aspect-[4/5]" : "aspect-[5/4]"}`}
                >
                  <img src={w.img} alt={w.title} loading="lazy" />
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl group-hover:text-orange transition-colors">{w.title}</h3>
                  <span className="pill text-olive">{w.tag}</span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    n: "01",
    t: "Brand Identity",
    d: "Your brand is more than a logo. It's the feeling someone gets when they encounter your name, your colors, your voice. We build brand identities from the ground up — strategy, naming, visual systems, tone of voice, and everything in between. The result is a brand that's unmistakably you, and impossible to ignore.",
    del: "Brand Strategy · Logo & Visual Identity · Color & Typography Systems · Brand Guidelines · Tone of Voice",
  },
  {
    n: "02",
    t: "Content Production",
    d: "Content is currency. We create scroll-stopping photo, video, and written content tailored for every platform — from Instagram Reels to LinkedIn thought leadership to website hero imagery. Our content doesn't just fill a feed; it builds a world around your brand that audiences want to live in.",
    del: "Photography · Videography · Copywriting · Social Media Content · Campaign Assets · Brand Films",
  },
  {
    n: "03",
    t: "Post-Production & Editing",
    d: "Raw footage and rough drafts become polished, powerful stories in our hands. Our editing team handles everything from short-form social cuts and brand films to long-form documentary edits and motion graphics. We obsess over every frame, every cut, every second of silence — because that's where the magic lives.",
    del: "Video Editing · Color Grading · Motion Graphics · Sound Design · Reels & Short-Form Cuts · Brand Film Post-Production",
  },
  {
    n: "04",
    t: "Advertising Campaigns",
    d: "From concept to conversion, we design and execute advertising campaigns that move people — and move product. We handle the big idea, the creative execution, the media placement strategy, and the performance analysis. Whether it's a product launch, a seasonal push, or a full brand awareness campaign, we build it to perform.",
    del: "Campaign Strategy · Creative Concepting · Digital Advertising (Meta, Google, TikTok) · OOH & Print · Campaign Reporting & Optimization",
  },
];

function Services() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="services" className="dark bg-noir text-white py-32 md:py-40">
      <div className="container-sm">
        <FadeUp>
          <div className="flex items-center gap-3 mb-10 text-orange">
            <Asterisk size={18} />
            <span className="eyebrow">What We Do</span>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-4xl">
            Where creative thinking meets strategic <span className="text-orange">brand impact.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-soft leading-relaxed">
            Every brand has a story. We're the ones who figure out how to tell it — loudly, beautifully, and in a way that actually converts. Our four core disciplines work together to give your brand a complete, cohesive presence.
          </p>
        </FadeUp>

        <div className="mt-20 border-t border-white/15">
          {SERVICES.map((s, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-white/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-6 py-8 text-left"
                >
                  <div className="flex items-baseline gap-6 md:gap-10 min-w-0">
                    <span className="text-sm text-soft tabular-nums">{s.n}</span>
                    <span className="font-display text-2xl md:text-4xl truncate">{s.t}</span>
                  </div>
                  <span
                    className="shrink-0 inline-grid h-12 w-12 place-items-center rounded-full border border-white/30 transition-transform duration-500"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    <Plus size={18} />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 pl-10 md:pl-20 max-w-2xl">
                      <p className="text-base text-soft">{s.d}</p>
                      <p className="mt-5 text-xs uppercase tracking-[0.12em] text-orange">{s.del}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    q: "Our content engagement tripled in the first month. The team understood our brand voice better than we did.",
    n: "Giulia",
    r: "Founder, Club 33 Milan",
    img: testimonial3Asset,
  },
  {
    q: "Pink Peach didn't just rebrand us — they gave us a whole new audience. The launch sold out in 48 hours.",
    n: "Ameer",
    r: "Founder, Skintalk",
    img: testimonial1Asset,
  },
  {
    q: "Working with Pink Peach felt less like hiring an agency and more like gaining a creative partner who genuinely cared about our growth.",
    n: "Johnny",
    r: "Founder, Muscle Plus",
    img: testimonial2Asset,
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  return (
    <section className="dark bg-noir text-white py-32 border-t border-white/10">
      <div className="container-sm">
        <FadeUp>
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3 text-orange">
              <Asterisk size={18} />
              <span className="eyebrow">Kind Words</span>
            </div>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-2 w-8 rounded-full transition-colors ${
                    idx === i ? "bg-orange" : "bg-white/20"
                  }`}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeUp>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${i * 100}%` }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="w-full shrink-0 px-1">
                <div className="grid gap-10 md:grid-cols-[1fr_2fr] items-center">
                  <div className="image-hover aspect-square max-w-sm">
                    <img src={t.img} alt={t.n} loading="lazy" />
                  </div>
                  <div>
                    <div className="flex gap-1 text-orange mb-6">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} size={18} fill="currentColor" stroke="none" />
                      ))}
                    </div>
                    <p className="font-display text-2xl md:text-3xl leading-[1.3]">"{t.q}"</p>
                    <div className="mt-8">
                      <p className="font-display text-lg">{t.n}</p>
                      <p className="text-sm text-soft">{t.r}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="dark bg-noir text-white pt-28">
      <div className="container-x">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] pb-20 border-b border-white/15">
          <div>
            <span className="eyebrow text-orange">Let's Talk</span>
            <h3 className="font-display text-3xl md:text-4xl mt-5 leading-tight">
              Got a bold idea? <br />We're listening.
            </h3>
            <p className="mt-6 text-sm text-soft max-w-sm leading-relaxed">
              Whether you're starting from zero or ready to level up, we'd love to hear about your brand. Drop us a message and let's figure out what's possible together.
            </p>
            <a
              href="mailto:hello@pinkpeach.media"
              className="btn-primary mt-8 bg-orange"
              style={{ background: "var(--orange)" }}
            >
              Start a Project <ArrowUpRight size={16} />
            </a>
            <a
              href="mailto:hello@pinkpeach.media"
              className="arrow-link mt-6 ml-1 text-white block"
            >
              Or just say hi → hello@pinkpeach.media
            </a>
          </div>
          <div>
            <p className="eyebrow text-soft mb-5">Links</p>
            <ul className="space-y-3">
              {["Work", "Services", "About", "Contact", "Style Guide"].map((l) => (
                <li key={l}>
                  <a href="#" className="arrow-link text-white">
                    {l} <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-soft mb-5">Services</p>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Branding</li>
              <li>Content Creation</li>
              <li>Editing</li>
              <li>Advertising Campaigns</li>
            </ul>
            <p className="eyebrow text-soft mb-3 mt-8">Social</p>
            <ul className="space-y-3">
              <li><a href="https://www.instagram.com/pinkpeach.media/" target="_blank" rel="noopener noreferrer" className="arrow-link text-white"><Instagram size={16}/> Instagram <ArrowUpRight size={14} /></a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-soft mb-5">Contact</p>
            <a href="mailto:hello@pinkpeach.media" className="text-sm text-white/80 hover:text-orange transition-colors">
              hello@pinkpeach.media
            </a>
            <p className="mt-4 text-sm text-soft">+34 647 491 120</p>
            <p className="text-sm text-soft">+961 3 700 413</p>
            <p className="mt-8 text-sm text-white/80 italic">Making brands worth remembering.</p>
          </div>
        </div>

        <div className="py-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.12em] text-soft">© 2026 Pink Peach Studio. All rights reserved.</p>
          <div className="flex items-center gap-2 text-orange">
            <Asterisk size={14} className="spin-slow" />
            <span className="eyebrow">Made with peach</span>
          </div>
        </div>

        <div className="overflow-hidden">
          <h2
            aria-hidden="true"
            className="font-display font-bold text-white leading-[0.85] tracking-[-0.05em] text-[clamp(5rem,22vw,22rem)] -mb-[0.15em] text-center lowercase"
          >
            pink peach
          </h2>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-ivory text-noir">
      <Nav />
      <Hero />
      <Marquee />
      <ImageMarquee />
      <About />
      <Work />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
