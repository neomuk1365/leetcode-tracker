import { motion } from "framer-motion";
import Particles from "react-tsparticles";

export default function Hero() {
  return (
    <div className="hero">

      <Particles
        className="particles"
        options={{
          background: { color: "#020617" },
          particles: {
            number: { value: 60 },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: "#0ea5e9" }
          }
        }}
      />

      <motion.div
        className="glass hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Ravi Ranjan</h1>
        <h2>AI • ML • Full Stack Developer</h2>
        <p>Building intelligent systems & solving real-world problems daily.</p>
      </motion.div>
    </div>
  );
}