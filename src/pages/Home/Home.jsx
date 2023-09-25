import { createContext, useState } from "react";
import Banner from "../../components/Header/Banner/Banner";
import AllDonations from "../../components/Main/AllDonations/AllDonations";

export const SearchedDataContext = createContext();

const Home = () => {

    document.title = 'Donation Campaign';

    const [searchedData, setSearchedData] = useState([]);
    const [emptyField, setEmptyField] = useState([true]);

    return (
        <div>
            <SearchedDataContext.Provider value={{searchedData, setSearchedData, emptyField, setEmptyField}}>
                <Banner></Banner>
                <AllDonations></AllDonations>
            </SearchedDataContext.Provider>
        </div>
    );
};

export default Home;