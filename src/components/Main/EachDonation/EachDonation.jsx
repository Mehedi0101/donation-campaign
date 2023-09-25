import { useContext } from "react";
import { DonationContext } from "../AllDonations/AllDonations";
import { useNavigate } from "react-router-dom";

const EachDonation = () => {
    const { id, picture, title, category, text_color, category_bg_color, card_bg_color } = useContext(DonationContext);

    const navigate = useNavigate();

    const handleCard = () => {
        navigate(`/donation-details/${id}`);
    }
    
    return (
            <div onClick={handleCard} style={{backgroundColor: card_bg_color}} className="flex flex-col pb-4 rounded-lg cursor-pointer active:scale-95 transition-transform">
                <img className="object-cover h-40 rounded-t-lg mb-4" src={picture} alt="" />
                <div style={{backgroundColor: category_bg_color, color: text_color}} className="mx-4 text-sm w-fit px-3 py-1 rounded font-medium mb-1">{category}</div>
                <h2 style={{color: text_color}} className="mx-4 text-lg font-semibold">{title}</h2>
            </div>
    );
};

export default EachDonation;