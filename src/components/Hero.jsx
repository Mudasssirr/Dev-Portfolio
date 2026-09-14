import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { FaArrowDown, FaDownload } from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";

export default function Hero() {
  const typedElRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElRef.current, {
      strings: personalInfo.roles,
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1400,
      startDelay: 400,
      loop: true,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-grid overflow-hidden"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="max-w-6xl w-full mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-mono text-cyan-400 text-sm mb-4">
            <span className="text-purple-400">$</span> whoami
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <div className="mt-5 font-mono text-xl sm:text-2xl text-white/80 h-9">
            <span className="text-green-400">&gt; </span>
            <span ref={typedElRef} />
          </div>

          <p className="mt-6 max-w-xl text-white/55 leading-relaxed">
            {personalInfo.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 font-mono text-sm font-semibold text-black hover:opacity-90 transition glow-cyan"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-cyan-400/40 font-mono text-sm font-semibold text-cyan-300 hover:bg-cyan-400/10 transition"
            >
              Get In Touch
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 font-mono text-sm font-semibold text-white/80 hover:border-green-400/50 hover:text-green-300 transition"
            >
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target={url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={name}
                className="text-white/50 hover:text-cyan-400 transition-colors text-xl"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="glass rounded-xl p-5 font-mono text-sm shadow-2xl shadow-black/50"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-amber-300/80" />
            <span className="w-3 h-3 rounded-full bg-green-400/80" />
            <span className="ml-3 text-white/40 text-xs">
              developer.json
            </span>
          </div>
          <pre className="whitespace-pre-wrap leading-6 text-white/80">
            <span>{"{"}</span>
            {"\n  "}"name"<span>: </span>
            <span className="text-green-400">"{personalInfo.name}"</span>,
            {"\n  "}"role"<span>: </span>
            <span className="text-green-400">"{personalInfo.role}"</span>,
            {"\n  "}"experience"<span>: </span>
            <span className="text-amber-300">"3+ years"</span>,
            {"\n  "}"stack"<span>: [</span>
            {"\n    "}<span className="text-cyan-300">"Laravel"</span>,
            {"\n    "}<span className="text-cyan-300">"React"</span>,
            {"\n    "}<span className="text-cyan-300">"React Native"</span>,
            {"\n    "}<span className="text-cyan-300">"Node.js"</span>
            {"\n  "}],
            {"\n  "}"focus"<span>: [</span>
            {"\n    "}<span className="text-purple-300">"REST APIs"</span>,
            {"\n    "}<span className="text-purple-300">"RBAC / JWT"</span>,
            {"\n    "}<span className="text-purple-300">"AI Integration"</span>
            {"\n  "}],
            {"\n  "}"available"<span>: </span>
            <span className="text-cyan-400">true</span>
            {"\n}"}
          </pre>
        </motion.div>
      </div>

      <motion.a
        href="#skills"
        aria-label="Scroll down"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400/70 text-xl"
      >
        <FaArrowDown />
      </motion.a>
    </section>
  );
}
