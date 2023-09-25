import { createContext, useContext } from "react";
import { useLoaderData } from "react-router";
import EachDonation from "../EachDonation/EachDonation";
import { SearchedDataContext } from "../../../pages/Home/Home";

export const DonationContext = createContext();

const AllDonations = () => {

    const AllDonations = useLoaderData();

    const {searchedData, emptyField} = useContext(SearchedDataContext);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 md:px-10 lg:px-14 xl:px-20 mt-10 md:mt-20">
            {
                !searchedData.length && !emptyField && <div className="h-[70vh] col-span-1 md:col-span-2 lg:col-span-4 flex justify-center items-center text-center font-bold lg:text-3xl md:text-2xl text-xl"><p>No match found</p></div>
            }
            {
                !searchedData.length && emptyField
                ? 
                AllDonations.map(donation => <DonationContext.Provider value={donation} key={donation.id}><EachDonation></EachDonation></DonationContext.Provider>)
                :
                searchedData.map(donation => <DonationContext.Provider value={donation} key={donation.id}><EachDonation></EachDonation></DonationContext.Provider>) 
            }
        </div>
    );
};

export default AllDonations;