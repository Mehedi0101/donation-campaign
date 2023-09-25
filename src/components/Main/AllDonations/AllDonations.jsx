import { createContext } from "react";
import { useLoaderData } from "react-router";
import EachDonation from "../EachDonation/EachDonation";

export const DonationContext = createContext();

const AllDonations = () => {

    const AllDonations = useLoaderData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 md:px-10 lg:px-14 xl:px-20 mt-10 md:mt-20">
            {
                AllDonations.map(donation => <DonationContext.Provider value={donation} key={donation.id}><EachDonation></EachDonation></DonationContext.Provider>)
            }
        </div>
    );
};

export default AllDonations;