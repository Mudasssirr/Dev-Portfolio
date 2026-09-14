import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolioData";

const accentColor = {
  cyan: "#000000",
  purple: "#000000",
  green: "#000000",
};

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          index="experience"
          title="Professional Experience"
          subtitle="// git log --author='Mudassir' --oneline --graph"
        />

        <VerticalTimeline lineColor="transparent">
          {experience.map((job, idx) => {
            const color = accentColor[job.accent] ?? accentColor.cyan;
            return (
              <VerticalTimelineElement
                key={job.id}
                contentStyle={{ color: "#000" }}
                iconStyle={{
                  background: "#ffffff",
                  color,
                }}
                icon={<FaBriefcase />}
              >
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="glass rounded-xl p-6 border border-black/5"
                  style={{ borderColor: `${color}33` }}
                >
                  <p className="font-mono text-xs" style={{ color }}>
                    {job.date}
                  </p>
                  <h3 className="text-xl font-bold mt-1">{job.title}</h3>
                  <p className="font-mono text-sm text-black/50 mb-4">
                    @ {job.company}
                  </p>

                  <ul className="space-y-2">
                    {job.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-black/65 leading-relaxed flex gap-2"
                      >
                        <span style={{ color }} className="font-mono">
                          ▹
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-black/10 text-black/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}
