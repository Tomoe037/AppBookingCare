import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default DefaultLayout;
