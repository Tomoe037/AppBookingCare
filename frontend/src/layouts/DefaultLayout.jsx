import { Outlet } from 'react-router-dom';
import NavBar from "../components/Navbar/Navbar.jsx"
const DefaultLayout = () => {
    return (
        <>
      <NavBar />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Outlet/> 
      </main>
      {/* <Footer /> */}
    </>
    );
}

export default DefaultLayout;