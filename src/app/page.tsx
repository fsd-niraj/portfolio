"use client";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { themes } from "./themes";
import { blogs } from "@/data/home";

const experience = [
  {
    role: "Software Engineer",
    company: "Ganitsphere",
    location: "Toronto, ON",
    dates: "Sep 2025 — Present",
    summary:
      "Building data-intensive platforms, resilient migration workflows, and event-driven services.",
    highlights: [
      "Built Kafka ingestion services processing 100K+ events per day.",
      "Designed resumable database migrations across 50+ tables and 200+ schema objects.",
      "Created reconciliation pipelines validating 1M+ records with checksums and configurable rules.",
    ],
    stack: "TypeScript · Go · React · Kafka · PostgreSQL · AWS",
  },
  {
    role: "Software Engineer",
    company: "Legends",
    location: "Toronto, ON",
    dates: "Aug 2024 — Aug 2025",
    summary:
      "Developed real-time venue operations and monitoring systems for large-scale live events.",
    highlights: [
      "Integrated operational data across 400+ venues and 15,000+ devices.",
      "Built React/D3 dashboards and Node.js services for device health, transactions, and incidents.",
      "Used WebSockets and event-driven processing to improve operational visibility.",
    ],
    stack: "React · D3.js · Node.js · PostgreSQL · Redis · WebSockets",
  },
  {
    role: "Software Developer",
    company: "Expertrons",
    location: "Mumbai, India",
    dates: "Dec 2020 — Dec 2022",
    summary:
      "Built product and backend workflows for a multi-sided career platform.",
    highlights: [
      "Reduced content-delivery latency from 1.7s to 260ms (85%).",
      "Reduced API traffic by 30% through caching and API/data-access optimization.",
    ],
    stack: "React · TypeScript · Node.js · MongoDB · Redis",
  },
];

type Theme = (typeof themes)[number];

function getThemeStyles(theme: Theme): CSSProperties {
  return {
    "--paper": theme.paper,
    "--surface": theme.surface,
    "--ink": theme.ink,
    "--muted": theme.muted,
    "--border": theme.border,
    "--accent": theme.accent,
    "--accent-text": theme.accentText,
    "--secondary": theme.secondary,
  } as CSSProperties;
}

export default function Home() {
  const [themeIndex, setThemeIndex] = useState(0);
  const theme = themes[themeIndex];

  function cycleTheme() {
    setThemeIndex((current) => (current + 1) % themes.length);
  }
  return (
    <main
      style={getThemeStyles(theme)}
      className="min-h-screen p-4 bg-[var(--paper)] duration-200"
    >
      <div className="max-w-5xl m-auto min-h-screen overflow-hidden border-x border-dashed border-[var(--border)] bg-[var(--paper)] text-[var(--ink)] -colors">
        {/* Navigation */}
        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <Link
            href="#home"
            className="text-sm font-bold tracking-[-0.04em] sm:text-base"
          >
            NIRAJ PANCHAL<span className="text-[var(--secondary)]">.</span>
          </Link>

          <nav className="flex items-center gap-3 text-xs text-[var(--muted)] sm:gap-8 sm:text-sm">
            <Link href="#experience" className=" hover:text-[var(--ink)]">
              Experience
            </Link>
            <Link
              href="#research"
              className="hidden  hover:text-[var(--ink)] sm:inline"
            >
              Research
            </Link>
            <Link
              href="#blog"
              className="hidden  hover:text-[var(--ink)] sm:inline"
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-[var(--border)] px-4 py-2 text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-text)]"
            >
              Contact ↗
            </Link>

            <button
              type="button"
              onClick={cycleTheme}
              aria-label={`Change color theme. Current theme: ${theme.name}`}
              title={`Current theme: ${theme.name}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-2 text-xs  hover:opacity-70 sm:px-4 sm:text-sm"
            >
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: theme.accent }}
              />
              <span className="hidden sm:inline">{theme.name}</span>
              <span aria-hidden="true">↻</span>
            </button>
          </nav>
        </header>

        {/* Hero */}
        <section
          id="home"
          className="mx-auto flex max-w-7xl flex-col justify-between gap-16 px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:min-h-[650px] lg:flex-row lg:items-end lg:px-12 lg:pt-32"
        >
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              Software Engineer · Toronto, Canada
            </div>

            <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.075em] sm:text-7xl lg:text-[100px]">
              I build software
              <br />
              that works
              <br />
              <span className="text-[var(--secondary)]">beautifully.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              From thoughtful user interfaces to the systems behind them, I turn
              complex engineering problems into software that feels simple,
              fast, and reliable.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#experience"
                className="rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm text-[var(--accent-text)]  hover:opacity-80"
              >
                View experience <span className="ml-2">↘</span>
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-[var(--border)] px-6 py-3.5 text-sm  hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-text)]"
              >
                Get in touch <span className="ml-1">↗</span>
              </Link>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-6 border-t border-dashed border-[var(--border)] pt-5 lg:max-w-[245px] lg:shrink-0">
            <div>
              <p className="text-3xl font-medium tracking-[-0.06em]">4</p>
              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                Years of Experience
              </p>
            </div>
            {/* <div>
              <p className="text-3xl font-medium tracking-[-0.06em]">10</p>
              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                Records validated
              </p>
            </div> */}
            <div className="col-span-2 mt-1 border-t border-dashed border-[var(--border)] pt-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                My focus
              </p>
              <p className="mt-2 text-sm">
                Product experiences × systems engineering
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section
          id="experience"
          className="border-t border-dashed border-[var(--border)] bg-[var(--surface)] px-5 py-14 sm:px-8 sm:py-16 lg:px-12"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-8">
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                01 / Experience
              </p>
              <h2 className="text-3xl font-medium tracking-[-0.06em] sm:text-4xl">
                Work experience.
              </h2>
            </div>

            <div className="divide-y divide-dashed divide-[var(--border)] border-y border-dashed border-[var(--border)]">
              {experience.map((job) => (
                <article key={job.company} className="py-6 sm:py-8">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.04em]">
                        {job.company}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {job.role} · {job.location}
                      </p>
                    </div>
                    <p className="text-xs text-[var(--muted)]">{job.dates}</p>
                  </div>
                  <p className="mt-4 text-sm leading-6">{job.summary}</p>
                  <ul className="mt-3 space-y-2">
                    {job.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-[var(--muted)]"
                      >
                        <span className="text-[var(--secondary)]">—</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-[var(--secondary)]">
                    {job.stack}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Research Paper */}
        <section
          id="research"
          className="border-t border-dashed border-[var(--border)] px-5 py-14 sm:px-8 sm:py-16 lg:px-12"
        >
          <div className="mx-auto max-w-5xl">
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              02 / Research
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.06em] sm:text-4xl">
              Research papers and blogs.
            </h2>
            {blogs.map((b, i) => (
              <a href={b.href} key={i} target="_blank">
                <article className="mt-7 border border-dashed border-[var(--border)] p-5 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--secondary)]">
                    {b.title}
                  </p>
                  <h3 className="mt-3 text-xl font-medium tracking-[-0.04em]">
                    {b.subTitle}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
                    {b.date}
                  </p>
                </article>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            04 / Contact
          </p>

          <h2 className="max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
            Have something
            <br />
            interesting to build?
          </h2>

          <div className="mt-8 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <p className="max-w-md text-base leading-7 text-[var(--muted)]">
              I&apos;m always open to connecting with people who care about
              thoughtful engineering, useful products, and solving difficult
              problems.
            </p>

            {/* Replace the placeholder with your real email address. */}
            <a
              href="mailto:nirajp3450@gmail.com"
              className="inline-flex w-fit items-center gap-3 border-b border-[var(--accent)] pb-2 text-lg -opacity hover:opacity-60"
            >
              Let&apos;s connect <span>↗</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[var(--border)] px-5 py-6 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-[var(--muted)] sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Niraj Panchal</p>
            <Link href="#home" className=" hover:text-[var(--ink)]">
              Back to top ↑
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
