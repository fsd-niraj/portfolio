import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Database,
  Gauge,
  Layers3,
  Mail,
  ScanSearch,
  Workflow,
  Zap,
} from "lucide-react";
import { principles, myprocess, projects, services } from "@/data/home";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9f6] text-[#20211f] selection:bg-[#d9f36a] selection:text-[#20211f]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#20211f]/10 bg-[#faf9f6]/90 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-12"
        >
          <Link
            href="#home"
            className="flex items-center gap-3"
            aria-label="Home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#20211f] text-sm font-semibold text-white">
              {/* NP */}
              <Image alt="NP" src="/favicon.png" width={100} height={100} />
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight">
                Niraj Panchal
              </span>
              <span className="text-xs font-semibold tracking-tight text-[#7d7e72]">
                Engineering / Consulting
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-[#686961] md:flex">
            <Link href="#services" className="transition hover:text-black">
              Services
            </Link>
            <Link href="#work" className="transition hover:text-black">
              Work
            </Link>
            <Link href="#approach" className="transition hover:text-black">
              Approach
            </Link>
            <Link href="#about" className="transition hover:text-black">
              About
            </Link>
            <Link href="/demo" className="transition hover:text-black">
              Example
            </Link>
          </div>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#20211f] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#393a34]"
          >
            Let&apos;s talk
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto max-w-[1240px] px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-12 lg:pt-32"
      >
        <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
          <div>
            {/* <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#20211f]/15 px-3.5 py-2 text-xs text-[#55574e]">
              <span className="h-2 w-2 rounded-full bg-[#779d38]" />
              Software engineering · Performance · AI
            </div> */}

            <h1 className="max-w-[800px] text-[clamp(3.4rem,8vw,6.8rem)] font-medium leading-[0.98] tracking-[-0.075em]">
              I make software
              <br />
              <span className="text-[#7d7e72]">work better.</span>
            </h1>

            <p className="mt-8 max-w-[590px] text-base leading-8 text-[#686961] sm:text-lg">
              I help businesses find what&apos;s slowing their applications
              down, make better use of their databases, and bring AI into
              products where it actually makes a difference.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#d9f36a] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#c8e752]"
              >
                Discuss your project
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-[#20211f]/15 px-6 py-3.5 text-sm font-medium transition hover:border-[#20211f]/40"
              >
                See my work
                <ArrowDownRight size={15} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#77786e]">
              <span className="flex items-center gap-2">
                <Check size={14} />
                Evidence-driven engineering
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} />
                End-to-end thinking
              </span>
            </div>
          </div>

          {/* Static system visualization — interactive demo can replace this later */}
          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute -inset-6 rounded-full bg-[#d9f36a]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-[#20211f]/10 bg-white p-5 shadow-[0_20px_80px_-35px_rgba(32,33,31,0.25)] sm:p-7">
              <div className="flex items-center justify-between border-b border-[#20211f]/10 pb-5">
                <div>
                  <p className="text-xs text-[#85867b]">SYSTEM OVERVIEW</p>
                  <h2 className="mt-1 text-sm font-semibold">
                    From request to response
                  </h2>
                </div>
                <ScanSearch size={19} className="text-[#77786e]" />
              </div>

              <div className="space-y-3 py-6">
                <SystemNode
                  icon={<Layers3 size={17} />}
                  label="Application"
                  detail="Requests & user experience"
                  number="01"
                />
                <Connector />
                <SystemNode
                  icon={<Workflow size={17} />}
                  label="Backend services"
                  detail="APIs, queues & processing"
                  number="02"
                />
                <Connector />
                <SystemNode
                  icon={<Database size={17} />}
                  label="Data layer"
                  detail="Queries, indexes & transactions"
                  number="03"
                  highlighted
                />
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-[#20211f]/10 pt-5">
                <div className="rounded-xl bg-[#f5f5f0] p-3.5">
                  <Gauge size={18} className="mb-3 text-[#60644b]" />
                  <p className="text-sm font-medium">Performance</p>
                  <p className="mt-1 text-xs leading-5 text-[#77786e]">
                    Find and remove bottlenecks
                  </p>
                </div>
                <div className="rounded-xl bg-[#f5f5f0] p-3.5">
                  <Zap size={18} className="mb-3 text-[#60644b]" />
                  <p className="text-sm font-medium">Efficiency</p>
                  <p className="mt-1 text-xs leading-5 text-[#77786e]">
                    Use resources intentionally
                  </p>
                </div>
              </div>

              <p className="mt-4 text-center text-[10px] tracking-wide text-[#96978d]">
                A SYSTEMS-LEVEL APPROACH TO ENGINEERING
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise strip */}
      <section className="border-y border-[#20211f]/10 bg-[#f2f1eb]">
        <div className="mx-auto grid max-w-[1240px] gap-5 px-5 py-7 sm:grid-cols-3 sm:px-8 lg:px-12">
          <ExpertiseItem
            number="01"
            title="Database performance"
            detail="Queries, schemas & workloads"
          />
          <ExpertiseItem
            number="02"
            title="Full-stack systems"
            detail="Latency, reliability & scale"
          />
          <ExpertiseItem
            number="03"
            title="Practical AI"
            detail="Integration, data & automation"
          />
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <SectionHeading
          eyebrow="HOW I CAN HELP"
          title={
            <>
              Better systems start
              <br />
              with better questions.
            </>
          }
          description="You don't always need a bigger server, another framework, or a rewrite. Sometimes you need to understand what's already happening."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group flex flex-col rounded-[24px] border border-[#20211f]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#20211f]/25 hover:shadow-[0_18px_55px_-35px_rgba(32,33,31,0.3)] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f2f2ec]">
                    <Icon size={21} strokeWidth={1.6} />
                  </span>
                  <span className="text-xs text-[#999a8f]">
                    {service.number}
                  </span>
                </div>

                <p className="mt-7 text-xs font-medium uppercase tracking-[0.13em] text-[#85867b]">
                  {service.title}
                </p>

                <h3 className="mt-3 text-[26px] font-medium leading-tight tracking-[-0.045em]">
                  {service.headline}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#686961]">
                  {service.description}
                </p>

                <div className="my-6 h-px bg-[#20211f]/10" />

                <ul className="space-y-3">
                  {service.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-2.5 text-sm text-[#4f5049]"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-[#798f48]"
                      />
                      {capability}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f3f3ee] px-3 py-1.5 text-[11px] text-[#686961]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-[#22231f] text-[#faf9f6]">
        <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <SectionHeading
            eyebrow="SELECTED ENGINEERING WORK"
            title={
              <>
                Systems I&apos;ve worked on.
                <br />
                Problems I&apos;ve helped solve.
              </>
            }
            description="A selection of engineering work spanning data infrastructure, database-oriented platforms, and full-stack applications."
            dark
          />

          <div className="mt-14 divide-y divide-white/15">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.number}
                  className="grid gap-7 py-9 md:grid-cols-[0.65fr_1.35fr] md:gap-12 md:py-12"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15">
                        <Icon size={19} strokeWidth={1.5} />
                      </span>
                      <span className="text-xs tracking-[0.12em] text-[#b7b8ad]">
                        {project.category}
                      </span>
                    </div>

                    <p className="mt-6 text-xs text-[#a2a397]">
                      PROJECT {project.number}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#c2c3b9]">
                      {project.stack}
                    </p>
                  </div>

                  <div>
                    <h3 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#c2c3b9] sm:text-base">
                      {project.description}
                    </p>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {project.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2.5 text-sm text-[#e1e1d9]"
                        >
                          <Check
                            size={15}
                            className="mt-0.5 shrink-0 text-[#d9f36a]"
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-8 max-w-3xl text-xs leading-6 text-[#a2a397]">
            These summaries describe engineering work, not independently
            measured consulting outcomes. Detailed case studies can document the
            specific challenges, decisions, and verified results.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section
        id="approach"
        className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="HOW I WORK"
              title={
                <>
                  Evidence first.
                  <br />
                  Complexity second.
                </>
              }
              description="I don't start by choosing a tool. I start by understanding the system, measuring the problem, and finding out where an improvement will actually matter."
            />

            <div className="mt-8 flex items-center gap-3 text-sm text-[#686961]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d9f36a] text-[#20211f]">
                <ScanSearch size={17} />
              </span>
              Root-cause analysis over guesswork.
            </div>
          </div>

          <div>
            <div className="divide-y divide-[#20211f]/10 border-y border-[#20211f]/10">
              {myprocess.map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[48px_1fr] gap-4 py-6 sm:grid-cols-[64px_1fr]"
                >
                  <span className="pt-1 text-xs text-[#85867b]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-7 text-[#686961]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-3">
              {principles.map((principle) => (
                <div key={principle.title}>
                  <h3 className="text-sm font-semibold">{principle.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-[#686961]">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-[#20211f]/10 bg-[#f2f1eb]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-[#77786e]">
              A LITTLE ABOUT ME
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.06em] sm:text-5xl">
              Curious about
              <br />
              what happens
              <br />
              under the hood.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[#45463f]">
              I&apos;m a software engineer interested in how applications behave
              beneath the surface: how data moves, why performance breaks down,
              and what it takes to build systems that stay reliable as they
              grow.
            </p>

            <p className="mt-5 text-base leading-8 text-[#686961]">
              My experience spans full-stack development, data ingestion,
              migration and reconciliation systems, event-driven architectures,
              and AI-powered applications. I enjoy connecting these pieces to
              understand the bigger picture rather than treating each layer in
              isolation.
            </p>

            <p className="mt-5 text-base leading-8 text-[#686961]">
              For me, good engineering isn&apos;t about using the most tools.
              It&apos;s about understanding the trade-offs, solving the right
              problem, and leaving the system in a better state than you found
              it.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Database engineering",
                "Distributed systems",
                "Performance",
                "AI integration",
                "Backend architecture",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#20211f]/15 px-3.5 py-2 text-xs text-[#55574e]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="relative overflow-hidden rounded-[28px] bg-[#d9f36a] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-[#20211f]/10 sm:h-96 sm:w-96" />
          <div className="pointer-events-none absolute -right-4 -top-12 h-52 w-52 rounded-full border border-[#20211f]/10 sm:h-72 sm:w-72" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#45463f]">
              HAVE A PROBLEM WORTH SOLVING?
            </p>

            <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
              Let&apos;s find what&apos;s
              <br />
              slowing you down.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#45463f] sm:text-lg">
              A slow database, an application that struggles under load, or an
              AI idea you&apos;re ready to put into production. Tell me what
              you&apos;re working on, and let&apos;s figure out the next step.
            </p>

            {/* Replace with your actual email address */}
            <a
              href={`mailto:${process.env.EMAIL}?subject=Engineering%20consultation`}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#20211f] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#393a34]"
            >
              <Mail size={17} />
              Start a conversation
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#20211f]/10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-5 py-7 text-xs text-[#77786e] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <Link
            href="#home"
            className="font-semibold tracking-tight text-[#20211f]"
          >
            NP / Engineering
          </Link>

          <p>Thoughtful engineering. Measurable improvements.</p>

          <Link
            href="#home"
            className="inline-flex items-center gap-1 transition hover:text-black"
          >
            Back to top
            <ChevronRight size={13} className="-rotate-90" />
          </Link>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-xs font-medium tracking-[0.16em] ${
          dark ? "text-[#b7b8ad]" : "text-[#77786e]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-5 text-4xl font-medium leading-[1.08] tracking-[-0.06em] sm:text-5xl lg:text-6xl ${
          dark ? "text-[#faf9f6]" : "text-[#20211f]"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-5 max-w-2xl text-base leading-7 ${
          dark ? "text-[#c2c3b9]" : "text-[#686961]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function ExpertiseItem({
  number,
  title,
  detail,
}: {
  number: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="pt-1 text-xs text-[#85867b]">{number}</span>
      <div>
        <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
        <p className="mt-1.5 text-xs leading-5 text-[#77786e]">{detail}</p>
      </div>
    </div>
  );
}

function SystemNode({
  icon,
  label,
  detail,
  number,
  highlighted = false,
}: {
  icon: React.ReactNode;
  label: string;
  detail: string;
  number: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border p-3.5 ${
        highlighted
          ? "border-[#a9c64f] bg-[#f6f9e9]"
          : "border-[#20211f]/10 bg-white"
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
          highlighted
            ? "bg-[#d9f36a] text-[#20211f]"
            : "bg-[#f2f2ec] text-[#55574e]"
        }`}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold">{label}</p>
        <p className="mt-1 text-xs text-[#77786e]">{detail}</p>
      </div>
      <span className="text-[10px] text-[#999a8f]">{number}</span>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex h-3 items-center pl-8">
      <div className="h-full w-px bg-[#b8b9ae]" />
    </div>
  );
}
