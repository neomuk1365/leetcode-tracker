import { motion } from "framer-motion";

const skills = [
     {
    name: "Machine Learning",
    img: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    link: "https://scikit-learn.org"
  },
   { name: "AI", img: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png", link: "https://openai.com" },
   { name: "Dynamics 365", img: "https://cdn-icons-png.flaticon.com/512/888/888879.png", link: "https://dynamics.microsoft.com" },
  { name: "Business Central", img: "https://cdn-icons-png.flaticon.com/512/888/888879.png", link: "https://learn.microsoft.com/en-us/dynamics365/business-central/" },
  { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Python", img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", link: "https://www.python.org" },
  { name: "C++", img: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png", link: "https://isocpp.org" },
  { name: "SQL", img: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png", link: "https://www.mysql.com" },
 

];

export default function Skills() {
  return (
    <div className="section skills-bg">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.a
            key={i}
            href={skill.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            className="skill-card glass"
          >
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}