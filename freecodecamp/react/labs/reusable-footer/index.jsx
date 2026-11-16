export function Footer() {
  const [] = React.useState(false);
  return (
      <footer>
        <div className="footer-columns">
          <div className="footer-col">
            <ul>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <ul>
              <li><a href="#articles">Articles</a></li>
              <li><a href="#contact-me">Contact Me</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <ul>
              <li><a href="#privacy-policy">Privacy Policy</a></li>
              <li><a href="terms-of-service">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <p className="footer-copyright">© 2026 Bintang Simatupang. All Rights Reserved.</p>
        <div className="footer-icons">
          <a 
            href="#" 
            target="_blank" 
            className="icon"
          >
            <i className="fa-brands fa-github"></i>
            <span className="sr-only">GitHub</span>
          </a>
          <a 
            href="#"
            target="_blank"
            className="icon"
          >
             <i className="fa-brands fa-linkedin"></i>
             <span className="sr-only">LinkedIn</span>
          </a>
          <a 
            href="#"
            target="_blank"
            className="icon"
          >
            <i className="fa-brands fa-youtube"></i>
            <span className="sr-only">YouTube</span>
          </a>
          <a 
            href="#"
            target="_blank"
            className="icon"
          >
            <i className="fa-brands fa-instagram"></i>
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </footer>
  )
}