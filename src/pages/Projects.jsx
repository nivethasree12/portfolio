import { motion } from "framer-motion";
import {
  FaGithub,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {
  return (
    <section className="projects">
      <motion.div
        className="project-header"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-tag">FEATURED PROJECTS</p>

        <h1>Projects & Achievements</h1>

        <p>
          A collection of projects that demonstrate my interest in Artificial
          Intelligence, Data Science, Web Development, and problem solving.
        </p>
      </motion.div>

      <div className="project-grid">
        {/* Project 1 */}
        <motion.div
          className="project-card"
          whileHover={{ y: -8 }}
        >
          <h2>Sales & Revenue Dashboard</h2>

          <p>
            Interactive Power BI dashboard for sales analysis, KPI tracking,
            revenue trends, and business insights.
          </p>

          <div className="tech">
            <span>Power BI</span>
            <span>Excel</span>
            <span>Data Analysis</span>
          </div>

          <div className="project-buttons">
            <a
              href="https://github.com/nivethasree12/sales-revenue-analysis-dashboard"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="project-card"
          whileHover={{ y: -8 }}
        >
          <h2>Customer Segmentation</h2>

          <p>
            Machine learning project using clustering algorithms to identify
            customer groups based on purchasing behaviour and characteristics.
          </p>

          <div className="tech">
            <span>Python</span>
            <span>Pandas</span>
            <span>Scikit-learn</span>
            <span>K-Means</span>
          </div>

          <div className="project-buttons">
            <a
              href="https://github.com/nivethasree12/customer-segmentation-project"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className="project-card"
          whileHover={{ y: -8 }}
        >
          <h2>IBM Telco Customer Churn Analysis</h2>

          <p>
            Performed data cleaning and exploratory data analysis (EDA) on the
            IBM Telco Customer Churn dataset to uncover customer behaviour,
            service usage patterns, and business insights using Python.
          </p>

          <div className="tech">
            <span>Python</span>
            <span>Pandas</span>
            <span>Matplotlib</span>
            <span>Seaborn</span>
          </div>

          <div className="project-buttons">
            <a
              href="https://github.com/nivethasree12/apexplanet-data-analytics"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Project 4 */}
        <motion.div
          className="project-card"
          whileHover={{ y: -8 }}
        >
          <h2>Green Land Website</h2>

          <p>
            Developed a responsive website featuring a nature-inspired theme
            with an attractive interface, smooth navigation, and modern web
            design using React.
          </p>

          <div className="tech">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-buttons">
            <a
              href="https://github.com/nivethasree12"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Project 5 */}
        <motion.div
          className="project-card"
          whileHover={{ y: -8 }}
        >
          <h2>Portfolio Website</h2>

          <p>
            Responsive personal portfolio developed using React and Framer
            Motion with smooth animations, modern UI, and responsive design to
            showcase my skills and projects.
          </p>

          <div className="tech">
            <span>React</span>
            <span>CSS</span>
            <span>Framer Motion</span>
          </div>

          <div className="project-buttons">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          </div>
        </motion.div>
      </div>

      <div className="resume-section">
        <a
          href="/resume.pdf"
          download
          className="resume-button"
        >
          <FaDownload />
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Projects;