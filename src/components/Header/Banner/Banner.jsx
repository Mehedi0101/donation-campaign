import './Banner.css';

const Banner = () => {
    return (
        <div id="banner" className="h-[80vh] bg-red-300 flex flex-col justify-center items-center px-5 md:px-10 lg:px-14 xl:px-20 -z-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-5 lg:mb-10">I Grow By Helping People In Need</h1>
            <div className="flex">
                <input className="text-sm p-3 border border-r-0 border-dark2 outline-none rounded-s-lg w-full" type="text" placeholder="Search here...." />
                <button className="bg-primary1 px-5 font-semibold text-white h-full rounded-e-lg active:text-sm transition-all">Search</button>
            </div>
        </div>
    );
};

export default Banner;