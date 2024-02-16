import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageSingleMovie from "../pages/PageSingleMovie";
import { GlobalProvider } from "../context/GlobalContext";
import PageAbout from "../pages/PageAbout";
import PageFavourites from "../pages/PageFavourites";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorPage from "../pages/ErrorPage";
import SearchResults from "../pages/SearchResults";
import ReactErrorBoundary from "../components/ReactErrorBoundary";

function AppRouter() {
  return (
    <ReactErrorBoundary>
      <BrowserRouter basename="movie-database">
        <GlobalProvider>
          <div id="site-wrapper">
            <Header />
            <Routes>
              <Route path="/" element={<PageHome />} />
              <Route path="/about" element={<PageAbout />} />
              <Route path="/movie/:id" element={<PageSingleMovie />} />
              <Route path="/favourites" element={<PageFavourites />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/searchResults" element={<SearchResults />} />
            </Routes>
            <Footer />
          </div>
        </GlobalProvider>
      </BrowserRouter>
    </ReactErrorBoundary>
  );
}

export default AppRouter;
