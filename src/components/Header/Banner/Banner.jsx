import './Banner.css';

const Banner = () => {
    return (
        <div id="banner" className="h-[80vh] bg-red-300 flex flex-col justify-center items-center px-5 md:px-10 lg:px-14 xl:px-20 -z-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-5 lg:mb-10">I Grow By Helping People In Need</h1>
            <div className="flex flex-col md:flex-row gap-2 md:gap-0">
                <input className="text-sm p-3 border md:border-r-0 border-dark2 outline-none rounded-lg md:rounded-e-none w-full" type="text" placeholder="Search here...." />
                <button className="bg-primary1 px-5 py-2 font-semibold text-white h-full rounded-lg md:rounded-s-none active:text-sm transition-all">Search</button>
            </div>
        </div>
    );
};

export default Banner;