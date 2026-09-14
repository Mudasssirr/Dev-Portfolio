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
      <p className="font-mono text-sm text-black mb-2">
        <span className="text-black">const</span> section ={" "}
        <span className="text-black">"{index}"</span>;
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-black/50 font-mono text-sm">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
