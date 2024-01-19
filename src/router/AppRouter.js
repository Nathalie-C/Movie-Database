import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/pageHome";
import WorkShop from "../pages/WorkShop";
import PageSingleMovie from "../pages/PageSingleMovie";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/movie/:id" element={<PageSingleMovie />} />
        <Route path="/workshop" element={<WorkShop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
