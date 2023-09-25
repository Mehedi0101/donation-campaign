import { useContext } from "react";
import { DonationContext } from "../AllDonations/AllDonations";

const EachDonation = () => {

    const { id, picture, title, category, text_color, category_bg_color, card_bg_color } = useContext(DonationContext);


    return (
        <div className={`${card_bg_color === '#ff444a26' && 'bg-[#ff444a26]' || card_bg_color === '#79c23f26' && 'bg-[#79c23f26]' || card_bg_color === '#0052ff26' && 'bg-[#0052ff26]' || card_bg_color === '#f8714726' && 'bg-[#f8714726]'} flex flex-col pb-4 rounded-lg`}>
            <img className="object-cover h-40 rounded-t-lg mb-4" src={picture} alt="" />
            <div className={`mx-4 text-sm w-fit px-3 py-1 rounded font-medium ${text_color === '#FF444A' && 'text-[#FF444A]' || text_color === '#79C23F' && 'text-[#79C23F]' || text_color === '#0052FF' && 'text-[#0052FF]' || text_color === '#F87147' && 'text-[#F87147]'} ${category_bg_color === '#ff444a33' && 'bg-[#ff444a33]' || category_bg_color === '#79c23f33' && 'bg-[#79c23f33]' || category_bg_color === '#0052ff33' && 'bg-[#0052ff33]' || category_bg_color === '#f8714733' && 'bg-[#f8714733]'} mb-1`}>{category}</div>
            <h2 className={`mx-4 text-xl font-semibold ${text_color === '#FF444A' && 'text-[#FF444A]' || text_color === '#79C23F' && 'text-[#79C23F]' || text_color === '#0052FF' && 'text-[#0052FF]' || text_color === '#F87147' && 'text-[#F87147]'}`}>{title}</h2>
        </div>
    );
};

export default EachDonation;