import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "../pages/Home/HomePage";
import Register from "../pages/Auth/Register";
// import DefaultLayout from "../layouts/DefaultLayout";
import AdminLayout from "../layouts/AdminLayout";
import HomeAdmin from "../pages/Admin/HomeAdmin/HomeAdmin";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Route> */}
         <Route element={<AdminLayout />}>
          <Route path="/" element={<HomeAdmin />} />
        
        </Route>

        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
