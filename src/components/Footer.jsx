import { SOCIAL } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} T Sivani.</p>
      <div className="footer-links">
        <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="cursor-hover">
          GitHub
        </a>
        <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="cursor-hover">
          LinkedIn
        </a>
        <a href={`mailto:${SOCIAL.email}`} className="cursor-hover">
          Email
        </a>
      </div>
      <a href="#home" className="footer-top cursor-hover">
        Back to top &uarr;
      </a>
    </footer>
  );
}
