import { motion } from "framer-motion";

function About() {
  return (
    <section className="about">

      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
      >
        <p className="section-tag">ABOUT ME</p>

        <h1>
          Passionate about building
          intelligent digital solutions.
        </h1>

        <p className="about-text">
          I'm <strong>Nivetha Sree V</strong>, an Artificial Intelligence
          and Data Science student who enjoys combining creativity
          with technology. I love designing modern web interfaces,
          exploring AI applications, and continuously learning new
          technologies to solve real-world problems.
        </p>
      </motion.div>

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
      >

        <div className="info-card">
          <h3>Education</h3>

          <h4>B.Tech Artificial Intelligence & Data Science</h4>

          <p>
            Akshaya College of Engineering and Technology
          </p>

          <span>Anna University</span>
        </div>

        <div className="info-card">
          <h3>Focus Areas</h3>

          <div className="skills-grid">
            <span>Python</span>
            <span>Java(basic)</span>
            <span>React</span>
            <span>Machine Learning</span>
            <span>SQL</span>
            <span>Power BI</span>
          </div>
        </div>

      </motion.div>

    </section>
  );
}

export default About;