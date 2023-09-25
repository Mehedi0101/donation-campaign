import { useContext } from "react";
import { YourDonationContext } from "../../../pages/YourDonations/YourDonations";
import { useNavigate } from "react-router";

const YourDonation = () => {

    const { id, title, picture, category, text_color, card_bg_color, category_bg_color, price } = useContext(YourDonationContext);

    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/donation-details/${id}`);
    }

    return (
        <div style={{backgroundColor: card_bg_color}} className="flex gap-4 min-h-48 rounded-lg">

            <div className="w-1/2 md:w-1/3">
                <img className="object-cover h-full rounded-s-lg" src={picture} alt="" />
            </div>

            <div className="py-4 pr-4 flex gap-2 flex-col justify-between w-1/2 md:w-2/3">
                <div style={{backgroundColor: category_bg_color, color: text_color}} className="text-sm w-fit px-3 py-1 rounded font-medium mb-1">{category}</div>
                <h2  className="text-lg md:text-xl font-semibold">{title}</h2>
                <h3  style={{color: text_color}} className="font-semibold text-xs md:text-sm">${price}</h3>
                <button onClick={handleViewDetails} style={{backgroundColor: text_color}} className="px-5 py-2 text-white font-semibold rounded active:scale-95 transition-transform w-fit">View Details</button>
            </div>

        </div>
    );
};

export default YourDonation;