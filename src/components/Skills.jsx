import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/portfolioData";

const accentMap = {
  cyan: {
    text: "text-cyan-400",
    border: "hover:border-cyan-400/50",
    glow: "hover:shadow-cyan-500/20",
  },
  purple: {
    text: "text-purple-400",
    border: "hover:border-purple-400/50",
    glow: "hover:shadow-purple-500/20",
  },
  green: {
    text: "text-green-400",
    border: "hover:border-green-400/50",
    glow: "hover:shadow-green-500/20",
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
                      className={`glass rounded-lg px-4 py-3 flex items-center gap-3 border border-white/5 transition-all shadow-lg shadow-black/20 ${accent.border} ${accent.glow}`}
                    >
                      <Icon className={`text-xl ${accent.text}`} />
                      <span className="font-mono text-sm text-white/80">
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
