import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetails from "../components/Main/DonationDetails/DonationDetails";
import YourDonations from "../pages/YourDonations/YourDonations";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                loader: () => fetch('../../donations.json'),
                element: <Home></Home>
            },
            {
                path: '/donation-details/:id',
                loader: () => fetch('../../donations.json'),
                element: <DonationDetails></DonationDetails>
            },
            {
                path: '/your-donations',
                loader: () => fetch('../../donations.json'),
                element: <YourDonations></YourDonations>
            },
            {
                path: '/statistics',
                loader: () => fetch('../../donations.json'),
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default router;