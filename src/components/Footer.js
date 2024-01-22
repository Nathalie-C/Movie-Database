export default function Footer() {
  return (
    <div className="footer">
      <div>
        {/* logo */}
        <img src="" alt="Website logo"></img>
        <h3>guMDrop</h3>
      </div>

      <div>
        <FooterUrl href="">
          <p>HOME</p>
        </FooterUrl>
        <FooterUrl href="">
          <p>ABOUT</p>
        </FooterUrl>
        <FooterUrl href="">
          <p>FAVOURITES</p>
        </FooterUrl>
      </div>
      <p>&#169; 2024 Arielle M., John S., Nathalie C.</p>
    </div>
  );
}

function FooterUrl(props){
  <a href
}
