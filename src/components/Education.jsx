import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading index="education" title="Education" />

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 border border-black/5 flex gap-4"
            >
              <div className="w-11 h-11 shrink-0 rounded-lg bg-black/10 text-black flex items-center justify-center text-lg">
                <FaGraduationCap />
              </div>
              <div>
                <p className="font-mono text-xs text-black mb-1">
                  {edu.date}
                </p>
                <h3 className="font-bold text-black/90">{edu.degree}</h3>
                <p className="text-sm text-black/50">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
