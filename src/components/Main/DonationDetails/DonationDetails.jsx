import { useLoaderData, useParams } from "react-router";
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { setDataToLS } from "../../../utils/localStorageFunctionality";

const DonationDetails = () => {

    const { id: cardId } = useParams();
    const numericId = Number(cardId);

    const { id, picture, title, description, price, text_color } = useLoaderData().find(card => card.id == numericId);

    document.title = title;

    const showNotification = () => {
        Store.addNotification({
            title: "Successful!",
            message: "Thank you for your donation",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 2000,
            }
        });

        setDataToLS(id);
    }

    return (
        <div className="pt-24 md:pt-32 px-5 md:px-10 lg:px-14 xl:px-20">
            <div className="relative">
                <img className="w-full rounded-lg" src={picture} alt="" />
                <div className="bg-[#0b0b0b80] absolute w-full bottom-0 p-4 md:p-8 rounded-b-lg">
                    <button onClick={() => showNotification(id)} style={{ backgroundColor: text_color }} className={`text-white text-sm md:text-lg font-semibold px-5 py-2 rounded active:scale-95 transition-transform`}>Donate ${price}</button>
                </div>
            </div>
            <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-5 md:mt-10 text-center md:text-left">{title}</h2>
                <p className="text-justify text-dark2 mt-2 md:mt-4 text-sm md:text-base">{description}</p>
            </div>
        </div >
    );
};

export default DonationDetails;