export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-1st-part">
        <div className="footer-logo-group">
          {/* logo */}
          <img src="" alt="Website logo"></img>
          <h3>guMDrop</h3>
        </div>

        <ul className="footer-nav">
          <li>
            <a href="../pages/PageHome.js">HOME</a>
          </li>
          <li>
            <a href="../pages/PageAbout.js">ABOUT</a>
          </li>
          <li>
            <a href="#">FAVOURITES</a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <p>&#169; 2024 Arielle M., John S., Nathalie C.</p>
      </div>
    </div>
  );
}
