import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";

function Home() {
  return (
    <section className="home">

      {/* Left Side */}
      <div className="left-section">
        <SocialLinks />
      </div>

      {/* Center */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="hello">HELLO, I'M</p>

        <h1>
          Nivetha
          <br />
          Sree V
        </h1>

        <h2>
          Artificial Intelligence &
          <br />
          Data Science Student
        </h2>

        <p className="description">
          Passionate about building intelligent AI solutions,
          modern web applications and meaningful digital
          experiences through creativity and technology.
        </p>

        <button className="hero-btn">
          View Portfolio
        </button>
      </motion.div>

      {/* Right */}
      <motion.div
        className="image-section"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="blob"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 2, 0, -2, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity
          }}
        >
          <img
            src="/profile.png"
            alt="Nivetha Sree"
          />
        </motion.div>
      </motion.div>

    </section>
  );
}

export default Home;