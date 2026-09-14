import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { contactInfo, socialLinks } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          index="contact"
          title="Let's Build Something"
          subtitle="// Currently open to full-stack & backend engineering opportunities"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-10 border border-white/5 glow-purple text-left mx-auto"
        >
          <p className="font-mono text-sm text-white/60 mb-6">
            <span className="text-purple-400">function</span>{" "}
            <span className="text-cyan-300">getInTouch</span>() {"{"}
            <br />
            &nbsp;&nbsp;
            <span className="text-purple-400">return</span> "Let's talk about
            your next project.";
            <br />
            {"}"}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="w-full sm:w-auto justify-center px-7 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 font-mono text-sm font-semibold text-black hover:opacity-90 transition flex items-center gap-2"
            >
              <FaPaperPlane /> {contactInfo.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
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
      </div>
    </section>
  );
}
