import { useContext, useEffect, useState } from 'react';
import './Banner.css';
import { SearchedDataContext } from '../../../pages/Home/Home';

const Banner = () => {

    const [allData, setAllData] = useState([]);

    useEffect( () => {
        fetch('../../../../donations.json')
        .then(res => res.json())
        .then(data => setAllData(data))
    }, [] )

    const {setSearchedData, setEmptyField} = useContext(SearchedDataContext);

    const handleSearch = e => {
        e.preventDefault();
        const searchedCategory = e.target.searchBar.value;
        searchedCategory.length === 0 ? setEmptyField(true) : setEmptyField(false);
        setSearchedData(allData.filter(data => data.category.toLowerCase() === searchedCategory.toLowerCase()));
    }

    return (
        <div id="banner" className="h-[80vh] flex flex-col justify-center items-center px-5 md:px-10 lg:px-14 xl:px-20 -z-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-5 lg:mb-10">I Grow By Helping People In Need</h1>
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2 md:gap-0">
                <input className="text-sm p-3 border md:border-r-0 border-dark2 outline-none rounded-lg md:rounded-e-none w-full" name='searchBar' type="text" placeholder="Search here...." />
                <input type='submit' value='Search' className="bg-primary1 px-5 py-2 font-semibold text-white h-full rounded-lg md:rounded-s-none active:text-sm transition-all cursor-pointer"/>
            </form>
        </div>
    );
};

export default Banner;