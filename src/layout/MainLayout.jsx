import { Outlet } from "react-router";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-screen-2xl mx-auto pb-10 md:pb-20">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;