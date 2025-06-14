import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <img
          src="https://i.postimg.cc/qvgWBtWP/Travelite-removebg-preview-1.png"
          alt="Logo"
        />
        <h2 className="text-xl w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-[#2EC1DB] to-sky-500/30">
          Trips Fables.
        </h2>
        <p>
          The best tourist agency
          <br />
          We provide all guides for your tour
        </p>
      </aside>

      <nav>
        <header className="footer-title">Company</header>
        <Link to="/">Home</Link>
        <Link to="/community">Community</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </footer>
  );
};

export default Footer;
