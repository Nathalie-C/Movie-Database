import errorImg from "../images/errorImg.webp";

function ErrorPage(props) {
  return (
    <main className="error-page">
      {props.resetErrorBoundary ? (
        <div>
          <img src={errorImg} alt="disconnection" />
          <h1>Oops!</h1>
          <h2>Something went wrong...</h2>
          <button
            className="error-retry-button"
            onClick={props.resetErrorBoundary}
          >
            Try Again
          </button>
        </div>
      ) : (
        <div>
          <img src={errorImg} alt="disconnection" />
          <h1>Oops!</h1>
          <h2 className="error-text">Something went wrong...</h2>
        </div>
      )}
    </main>
  );
}

export default ErrorPage;
