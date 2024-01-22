import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/pageHome";
import WorkShop from "../pages/WorkShop";
import PageSingleMovie from "../pages/PageSingleMovie";
import { GlobalProvider } from "../context/GlobalContext";
import PageAbout from "../pages/PageAbout";

function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/movie/:id" element={<PageSingleMovie />} />
          <Route path="/workshop" element={<WorkShop />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
