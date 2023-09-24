import { Link, NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import logo from '../../../assets/Logo.png';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [showStatus, setShowStatus] = useState(false);


    return (
        <>
            <div className='hidden md:flex justify-between items-center px-5 md:px-10 lg:px-14 xl:px-20 py-5 w-full max-w-screen-2xl absolute'>
                <Link to='/'><img className='w-4/6 xl:w-5/6' src={logo} alt="" /></Link>
                <div className='text-lg flex gap-10'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/donation'>Donation</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                </div>
            </div>
            <div className='px-5 py-5 md:hidden absolute'>
                <div className='flex items-center gap-2'>
                    <FiMenu onClick={() => setShowStatus(!showStatus)} className='text-xl' />
                    <Link className='flex justify-center' to='/'><img className='w-1/2' src={logo} alt="" /></Link>
                </div>
                <div className={`text-sm flex flex-col gap-2 border border-primary1 p-6 w-fit rounded-lg absolute top-14 bg-white ${!showStatus && 'hidden'}`}>
                    <NavLink onClick={() => setShowStatus(false)} to='/'>Home</NavLink>
                    <NavLink onClick={() => setShowStatus(false)} to='/donation'>Donation</NavLink>
                    <NavLink onClick={() => setShowStatus(false)} to='/statistics'>Statistics</NavLink>
                </div>
            </div>
        </>
    );
};

export default Navbar;