import React from "react";

const InputCheckBox = ({id, name, label}) => {
    return (
        <>
            <div className="flex items-center gap-1.5">
                <input type="checkbox" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id={id} name={name} />
                <label for={id} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
            </div>
        </>
    );
}

export default InputCheckBox;