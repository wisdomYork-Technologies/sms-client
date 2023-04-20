import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import EmptyPage from "pages/Empty";
import HomePage from "pages/Home/home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path="*" element={<EmptyPage />} />
    </Routes>
  );
};

export default function Navigation() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}
