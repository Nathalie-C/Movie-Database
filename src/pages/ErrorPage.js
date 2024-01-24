import errorImg from "../images/errorImg.webp";

function ErrorPage() {
  return (
    <main className="error-page">
      <img src={errorImg} alt="image of disconnection" />
      <h1>Oops!</h1>
      <h2>Something went wrong...</h2>
    </main>
  );
}

export default ErrorPage;
