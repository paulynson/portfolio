import { FaArrowRight, FaEnvelope, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      data-pointer-spotlight
      className="pointer-spotlight relative overflow-hidden bg-black py-24 text-white transition-colors duration-500 dark:bg-[#1b4444] sm:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20" style={{
        backgroundImage: "linear-gradient(rgba(163,243,35,.12) 1px, transparent 1px), linear-gradient(90deg,rgba(163,243,35,.12) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage: "linear-gradient(to bottom, transparent, black 35%, transparent)",
      }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-6 font-mono text-sm tracking-widest text-[#A3F323]">
          &gt; CONTACT.connect()
        </div>
        <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <h2 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Have something <span className="text-[#A3F323]">great</span> in mind?
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-300">
              Whether you’re building a product, growing a team or looking for a frontend engineer,
              I’d love to hear what you’re working on.
            </p>
          </div>
          <div className="border border-white/20 bg-white/[0.04] p-6 sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center border border-[#A3F323]/40 text-[#A3F323]">
              <FaEnvelope aria-hidden="true" size={20} />
            </div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-gray-400">Get in touch</p>
            <a href="mailto:hello@abakadapaul.site" className="block break-all text-xl font-semibold text-white underline decoration-[#A3F323]/50 underline-offset-8 transition-colors hover:text-[#A3F323] sm:text-2xl">
              hello@abakadapaul.site
            </a>
            <a href="mailto:hello@abakadapaul.site?subject=Let%27s%20connect" data-pointer-magnetic className="magnetic-action contact-cta mt-8 inline-flex items-center gap-3 bg-[#A3F323] px-6 py-3 font-mono text-sm font-bold text-black transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A3F323]">
              SEND AN EMAIL <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-5 border-t border-white/20 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-gray-400">LET'S BUILD SOMETHING MEANINGFUL.</p>
          <a href="https://github.com/paulynson" target="_blank" rel="noopener noreferrer" aria-label="Visit Paul Abakada on GitHub (opens in a new tab)" className="inline-flex items-center gap-2 self-start text-sm text-gray-300 transition-colors hover:text-[#A3F323]">
            <FaGithub aria-hidden="true" size={18} /> GitHub <FaArrowRight aria-hidden="true" size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
