import { Outlet } from "react-router-dom";
import Navber from "../../sharedComponents/Navber/Navber";
import Footer from "../../sharedComponents/Footer/Footer";

const MainLayout = () => {
    return (
        <section className="min-h-screen">
           <Navber></Navber>
           <Outlet></Outlet> 
           <Footer></Footer>
        </section>
    );
};

export default MainLayout;