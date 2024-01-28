import React, {useState} from "react";

const AddQuantity = () => {
    let [quantity, setQuantity] = useState(1);

    const handleChange = (action) => {
        if ('desc' == action && 1 == quantity) return;
        setQuantity('inc' == action ? ++quantity : --quantity);
    }

    return (
        <div className="flex border-2 border-gray-900 items-center gap-x-[16px] py-[15px] px-[15px] h-12 rounded-[12px]">
            <span className="text-[24px] cursor-pointer" onClick={() => handleChange('desc')}>-</span>
            <p className="w-[10px] mt-[15px] text-center select-none">{quantity}</p>
            <span className="text-[24px] cursor-pointer" onClick={() => handleChange('inc')}>+</span>
        </div>
    );
}

export default AddQuantity;