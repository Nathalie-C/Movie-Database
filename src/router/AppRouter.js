import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/pageHome";
import WorkShop from "../pages/WorkShop";
import PageSingleMovie from "../pages/PageSingleMovie";
import { GlobalProvider } from "../context/GlobalContext";
import PageAbout from "../pages/PageAbout";
import PageFavourites from "../pages/PageFavourites";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/movie/:id" element={<PageSingleMovie />} />
          <Route path="/workshop" element={<WorkShop />} />
          <Route path="/favourites" element={<PageFavourites />} />
          <Route path="*" element={<WorkShop />} />
        </Routes>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
