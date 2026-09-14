import { useEffect, useRef, useState } from "react";
import * as ReactSlick from "react-slick";

const Slider = ReactSlick.default?.default ?? ReactSlick.default ?? ReactSlick;
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolioData";

export default function ProjectCarousel() {
  const sliderRef = useRef(null);

  // react-slick's `responsive` breakpoints only react to resize events (via
  // matchMedia addListener), not the width at mount — so a page that loads
  // directly at mobile width (e.g. a real phone) never gets the breakpoint
  // applied. Track slidesToShow ourselves instead.
  const [slidesToShow, setSlidesToShow] = useState(() =>
    window.innerWidth < 1024 ? 1 : 2
  );

  useEffect(() => {
    const onResize = () => setSlidesToShow(window.innerWidth < 1024 ? 1 : 2);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5500,
    pauseOnHover: true,
  };

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionHeading
            index="projects"
            title="Featured Projects"
            subtitle="// A selection of production systems I've architected and shipped"
          />
          <div className="hidden sm:flex gap-3 mb-14">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              aria-label="Previous project"
              className="w-11 h-11 rounded-full glass border border-black/10 flex items-center justify-center text-black hover:border-black/50 transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              aria-label="Next project"
              className="w-11 h-11 rounded-full glass border border-black/10 flex items-center justify-center text-black hover:border-black/50 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings} className="-mx-3">
          {projects.map((project, idx) => (
            <div key={project.id} className="px-3 h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass h-full rounded-2xl p-7 border border-black/5 hover:border-black/40 hover:shadow-xl hover:shadow-black/10 transition-all flex flex-col"
              >
                <p className="font-mono text-xs text-black mb-2">
                  // project_0{idx + 1}
                </p>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-black/50 mb-4">{project.tagline}</p>

                <ul className="space-y-2 mb-5 flex-1">
                  {project.points.slice(0, 3).map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-black/65 leading-relaxed flex gap-2"
                    >
                      <span className="text-black font-mono">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-black/10 text-black border border-black/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-black/5">
                  {project.link && (
                    <a
                      href={project.link} target="_blank"
                      className="flex items-center gap-2 text-sm font-mono text-black/60 hover:text-black transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                  {project.repo && (
                  <a
                    href={project.repo} target="_blank"
                    className="flex items-center gap-2 text-sm font-mono text-black/60 hover:text-black transition"
                  >
                    <FaGithub /> Source
                  </a>)}
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
