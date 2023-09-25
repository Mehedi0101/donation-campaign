import { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getDataFromLS } from "../../utils/localStorageFunctionality";
import YourDonation from "../../components/Main/YourDonation/YourDonation";

export const YourDonationContext = createContext();

const YourDonations = () => {

    const allDonations = useLoaderData();
    
    const [ yourDonationsId, setYourDonationsId ] = useState([]);

    useEffect( ()=>{
        const data = getDataFromLS();
        setYourDonationsId(data);
    }, [])

    const yourDonations = allDonations.filter( donation => yourDonationsId.includes(donation.id));

    return (
        <div className="pt-24 md:pt-32 px-5 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                yourDonations.map(donation => <YourDonationContext.Provider value={donation} key={donation.id}><YourDonation></YourDonation></YourDonationContext.Provider>)
            }
        </div>
    );
};

export default YourDonations;