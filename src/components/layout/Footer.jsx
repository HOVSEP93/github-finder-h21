import { FaGithub } from 'react-icons/fa';

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10  text-primary-content footer-center">
      <div>
        <a
          href="https://github.com/HOVSEP93"
          target="_blank"
          rel="noopener noreferrer"
          title="Hovsep Stepanian"
        >
          <FaGithub className="inline pr-2 text-5xl" />
        </a>
        <p>
          <strong>Hovsep Stepanian</strong> &copy; {footerYear} All rights
          reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
