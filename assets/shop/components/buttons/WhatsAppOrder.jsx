import React from "react";
import { SecondaryButton } from "./Buttons";

const WhatsAppOrder = () => {
    let number = '8237056887';
    let message = 'item name: Belt and price $100.'
    let url = `https://web.whatsapp.com/send?phone=${number}`
    url += `&text=${encodeURI(message)}&app_absent=0`;
    return (
        <a href={url} target="_blank">
            <SecondaryButton className="h-12 px-[15px]">
                Whats App Order
            </SecondaryButton>
        </a>
    );
}

export default WhatsAppOrder;