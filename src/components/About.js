import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="section about-bg glass"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h2>Who Am I?</h2>
      <p>
        Passionate AI & ML developer building intelligent systems and solving real-world problems.
      </p>
    </motion.div>
  );
}