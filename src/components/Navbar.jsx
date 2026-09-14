import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { navLinks, personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    history.pushState(null, "", href);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-mono font-bold text-lg">
          <span className="text-black">&lt;</span>
          <span className="text-gradient">{personalInfo.firstName}</span>
          <span className="text-black"> /&gt;</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-black/70">
          {navLinks.map((link, i) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-black transition-colors relative group"
              >
                <span className="text-black/70">0{i}.</span> {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={personalInfo.resumeUrl}
          download
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-black/15 font-mono text-xs font-semibold text-black/80 hover:border-black/50 hover:text-black transition"
        >
          <FaDownload /> Download CV
        </a>

        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass px-6"
          >
            {navLinks.map((link, i) => (
              <li key={link.name} className="py-3 border-t border-black/5">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-mono text-sm text-black/80"
                >
                  <span className="text-black/70">0{i}.</span> {link.name}
                </a>
              </li>
            ))}
            <li className="py-3 border-t border-black/5">
              <a
                href={personalInfo.resumeUrl}
                download
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 font-mono text-sm text-black"
              >
                <FaDownload /> Download CV
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
