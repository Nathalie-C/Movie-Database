export default function Banner({ src, alt }) {
  return (
    <div className="banner-img">
      <div className="banner-gradient"></div>
      <img src={src} alt={alt}></img>
    </div>
  );
}
