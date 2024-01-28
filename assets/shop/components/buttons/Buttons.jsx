import React from "react";

const SecondaryButton = ({className = 'px-6 py-2', children}) => {
    return (
        <button className={`${className} transition ease-in duration-200 uppercase text-gray-500 text-sm font-medium rounded-[18px] border border-gray-600/25 hover:bg-gray-600/50 hover:text-white  focus:outline-none`}>{children}</button>
    );
}

export {
    SecondaryButton
}