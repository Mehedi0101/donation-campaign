import { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getDataFromLS } from "../../utils/localStorageFunctionality";
import YourDonation from "../../components/Main/YourDonation/YourDonation";

export const YourDonationContext = createContext();

const YourDonations = () => {

    document.title = 'Your Donations';

    const allDonations = useLoaderData();
    
    const [ yourDonationsId, setYourDonationsId ] = useState([]);
    const [ showAllStatus, setShowAllStatus ] = useState(false);

    useEffect( ()=>{
        const data = getDataFromLS();
        data.length > 4 && setShowAllStatus(true);
        setYourDonationsId(data);
    }, [])

    const yourDonations = allDonations.filter( donation => yourDonationsId.includes(donation.id));

    return (
        <>
        <div className="pt-24 md:pt-32 px-5 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                !yourDonations.length && <div className="col-span-1 lg:col-span-2 h-[70vh] flex justify-center items-center font-bold text-center lg:text-3xl md:text-2xl text-xl"><p>You haven&apos;t made any donations yet</p></div>
            }
            {
                showAllStatus ? yourDonations.slice(0,4).map(donation => <YourDonationContext.Provider value={donation} key={donation.id}><YourDonation></YourDonation></YourDonationContext.Provider>) :
                yourDonations.map(donation => <YourDonationContext.Provider value={donation} key={donation.id}><YourDonation></YourDonation></YourDonationContext.Provider>)
            }
        </div>
        {
            showAllStatus && <button onClick={()=>setShowAllStatus(false)} className="px-5 py-2 bg-primary2 text-white block mx-auto rounded mt-10 active:scale-95 transition-transform">Show All</button>
        }
        </>
    );
};

export default YourDonations;