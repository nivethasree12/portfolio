import {
  FaGithub,
  FaLinkedin,
 
  FaEnvelope
} from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="social-links">

      <a href="https://github.com/nivethasree12">
        <FaGithub />
        <span>GitHub</span>
      </a>

      <a href="https://www.linkedin.com/in/nivetha-sree-v-2914b82aa/">
        <FaLinkedin />
        <span>LinkedIn</span>
      </a>

     
      <a href="nivethasreev@gmail.com">
        <FaEnvelope />
        <span>Email</span>
      </a>

    </div>
  );
}

export default SocialLinks;