import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-xl lg:text-lg footer justify-center lg:justify-around mt-5 py-10 bg-base-200   text-center">
      <nav>
        <header className="footer-title">Quick Links</header>
        <Link className="link link-hover">Notice</Link>
        <Link to="/academic/routine" className="link link-hover">
          Routine
        </Link>
        <Link to="/academic/notes" className="link link-hover">
          Notes
        </Link>
        <Link to="/academic/tutorial" className="link link-hover">
          Tutorial
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Info</header>
        <Link to="/students/profileCard" className="link link-hover">
          Profile
        </Link>
        <Link to="/students/idCard" className="link link-hover">
          ID Card
        </Link>
        <Link to="/faculty" className="link link-hover">
          Faculty
        </Link>
        <Link to="features">Feature Logs</Link>
      </nav>
      <nav>
        <header className="footer-title">Developer's Social</header>
        <div className="flex justify-around gap-4 text-4xl">
          <a href="https://www.facebook.com/MDahsanulhoqueabir">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/ahsanulhoqueabir/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ahsanulhoqueabir">
            <FaGithub />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
