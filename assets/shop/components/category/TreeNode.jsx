import React, {useState} from "react";
import TreeView from "./TreeView";
import InputCheckBox from "../form/InputCheckBox";

const TreeNode = ({className= 'py-2', node}) => {
    const {children, label} = node;
    const [showChildren, setShowChildren] = useState(false);

    return (
        <>
            <div className={className} onClick={() => setShowChildren(true)}>
                <InputCheckBox id='input' name='input'  label={label}/>
            </div>
            <ul>
                {showChildren && <TreeView treeData={children} />}
            </ul>
        </>
    );
}

export default TreeNode;