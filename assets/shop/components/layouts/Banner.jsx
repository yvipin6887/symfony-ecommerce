import React from "react";

const Banner = ({children}) => {
    return (
        <div className="w-full relative m-auto">
            {children}
        </div>
    );
}

export default Banner;