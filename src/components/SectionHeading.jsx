import { motion } from "framer-motion";

export default function SectionHeading({ index, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-14"
    >
      <p className="font-mono text-sm text-cyan-400 mb-2">
        <span className="text-purple-400">const</span> section ={" "}
        <span className="text-amber-300">"{index}"</span>;
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-white/50 font-mono text-sm">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
