import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Header/Navbar/Navbar";
import { ReactNotifications } from "react-notifications-component";
import ScrollToTop from "../utils/scrollToTop";
import { FadeLoader } from "react-spinners";

const MainLayout = () => {

    const navigation = useNavigation();

    return (
        <>
            <ReactNotifications />
            <ScrollToTop />
            <div className="max-w-screen-2xl mx-auto pb-10 md:pb-20">
                <Navbar></Navbar>
                {
                    navigation.state === 'loading' ? <div className="h-screen flex justify-center items-center"><FadeLoader color="#FF444A" /></div> : < Outlet ></Outlet>
                }
        </div >
        </>
    );
};

export default MainLayout;