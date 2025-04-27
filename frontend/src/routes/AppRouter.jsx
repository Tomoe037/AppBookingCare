import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import Register from "../pages/Auth/Register";
import DefaultLayout from "../layouts/DefaultLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Route>

        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
