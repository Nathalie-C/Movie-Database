import Banner from "../components/Banner";
import aboutImg from "../images/gumdrops.jpg";

export default function PageAbout() {
  return (
    <main className= "about">
      <Banner src={aboutImg} alt="banner image of gumdrops" />
      <section className="about-text">        
      <h1 className="about-heading">guMDrop</h1>
        <h2>The sweetest way to find movies!</h2>
        <p>
          guMDrop is a movie database that helps you find the perfect movie for
          any occasion. Whether you are looking for a comedy, a thriller, a
          romance, or anything in between, guMDrop has it all! You can browse
          through thousands of movies, read reviews, watch trailers, and get
          recommendations based on your preferences. Let’s satisfy that sweet
          tooth with a great movie!
        </p>
        <p>
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </p>
        </section>

      </main>
  );
}
