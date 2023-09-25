import { useNavigate } from "react-router";

const Error = () => {
    document.title = 'Error';
    
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    }

    return (
        <div className="h-[100vh] flex flex-col justify-center items-center text-center">
            <h2 className="text-6xl md:text-7xl lg:text-9xl font-bold text-dark2">404</h2>
            <p className="text-2xl lg:text-4xl font-bold mt-2">Oops! Page not found</p>
            <button onClick={handleGoHome} className="mt-8 px-5 py-2 bg-primary1 text-white active:scale-95 transition-transform rounded-md">Go Home</button>
        </div>
    );
};

export default Error;