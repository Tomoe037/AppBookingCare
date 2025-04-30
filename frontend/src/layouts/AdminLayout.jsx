import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin/NavbarAmin";
const AdminLayout = () => {
  return (
    <>
      <NavbarAdmin />
      <main
        style={{
          minHeight: "80vh",
          padding: "20px",
        
        }}
      >
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default AdminLayout;
