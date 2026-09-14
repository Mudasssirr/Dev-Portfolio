import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/portfolioData";

const accentMap = {
  cyan: {
    text: "text-black",
    border: "hover:border-black/50",
    glow: "hover:shadow-black/20",
  },
  purple: {
    text: "text-black",
    border: "hover:border-black/50",
    glow: "hover:shadow-black/20",
  },
  green: {
    text: "text-black",
    border: "hover:border-black/50",
    glow: "hover:shadow-black/20",
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="skills"
          title="Tech Stack & Skills"
          subtitle="// Tools and technologies I use to ship production-ready software"
        />

        <div className="space-y-12">
          {skillCategories.map((group) => {
            const accent = accentMap[group.accent];
            return (
              <div key={group.category}>
                <h3
                  className={`font-mono text-sm uppercase tracking-widest mb-5 ${accent.text}`}
                >
                  {group.category}
                </h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  {group.skills.map(({ name, icon: Icon }) => (
                    <motion.div
                      key={name}
                      variants={item}
                      whileHover={{ y: -4 }}
                      className={`glass rounded-lg px-4 py-3 flex items-center gap-3 border border-black/5 transition-all shadow-lg shadow-black/20 ${accent.border} ${accent.glow}`}
                    >
                      <Icon className={`text-xl ${accent.text}`} />
                      <span className="font-mono text-sm text-black/80">
                        {name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
