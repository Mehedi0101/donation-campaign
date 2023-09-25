import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import Donated from "../pages/Donated/Donated";
import DonationDetails from "../components/Main/DonationDetails/DonationDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                loader: () => fetch('../../donations.json'),
                element: <Home></Home>
            },
            {
                path: '/donations/:id',
                loader: () => fetch('../../donations.json'),
                element: <DonationDetails></DonationDetails>
            },
            {
                path: '/donated',
                element: <Donated></Donated>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default router;