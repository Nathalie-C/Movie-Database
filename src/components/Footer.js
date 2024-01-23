export default function Footer() {
  return (
    <footer>
      <div className="footer-1st-part">
        <a className="footer-logo-group site-logo">
          {/* logo */}
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 512 512">
            <path d="M256.742 37C407.512 37 501.293 355.711 501.293 355.711C531.717 408.289 493.682 474 432.826 474H79.1676C18.3185 474 -19.717 408.289 10.7069 355.711C10.7069 355.711 91.2167 37 256.742 37Z"></path>
          </svg>
          <h3>guMDrop</h3>
        </a>

        <ul className="footer-nav">
          <li>
            <a href="../pages/PageHome.js">Home</a>
          </li>
          <li>
            <a href="../pages/PageAbout.js">About</a>
          </li>
          <li>
            <a href="#">Favourites</a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <p>&copy; 2024 Arielle M., John S., Nathalie C.</p>
      </div>
    </footer>
  );
}
