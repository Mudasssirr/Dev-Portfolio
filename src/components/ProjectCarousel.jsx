import { useRef } from "react";
import * as ReactSlick from "react-slick";

const Slider = ReactSlick.default?.default ?? ReactSlick.default ?? ReactSlick;
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolioData";

export default function ProjectCarousel() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
    ],
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
              className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center text-cyan-400 hover:border-cyan-400/50 transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              aria-label="Next project"
              className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center text-cyan-400 hover:border-cyan-400/50 transition"
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
                className="glass h-full rounded-2xl p-7 border border-white/5 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/10 transition-all flex flex-col"
              >
                <p className="font-mono text-xs text-purple-400 mb-2">
                  // project_0{idx + 1}
                </p>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-white/50 mb-4">{project.tagline}</p>

                <ul className="space-y-2 mb-5 flex-1">
                  {project.points.slice(0, 3).map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-white/65 leading-relaxed flex gap-2"
                    >
                      <span className="text-cyan-400 font-mono">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/5">
                  {project.link && (
                    <a
                      href={project.link} target="_blank"
                      className="flex items-center gap-2 text-sm font-mono text-white/60 hover:text-cyan-400 transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                  {project.repo && (
                  <a
                    href={project.repo} target="_blank"
                    className="flex items-center gap-2 text-sm font-mono text-white/60 hover:text-purple-400 transition"
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
