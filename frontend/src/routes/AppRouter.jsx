import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import Register from "../pages/Auth/Register";
import DefaultLayout from "../layouts/DefaultLayout";
import AdminLayout from "../layouts/AdminLayout";
import HomeAdmin from "../pages/Admin/HomeAdmin/HomeAdmin";
import DoctorManager from "../pages/Admin/Doctor/DoctorManager";
import DetailDoctor from "../pages/DetailDoctor/DetailDoctor";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail-doctor/:id" element={<DetailDoctor />} />
        </Route>
         <Route element={<AdminLayout />}>
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/admin/doctor-manager" element={<DoctorManager/>} />
        
        </Route>

        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
