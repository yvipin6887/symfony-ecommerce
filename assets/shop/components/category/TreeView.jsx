import React from "react";
import TreeNode from "./TreeNode";

const TreeView = ({treeData}) => {
    console.log(treeData,'treeData')
    return (
        <ui className="">
            {treeData.map((node) => (
                <TreeNode node={node} key={node.key} />
            ))}
        </ui>
    );
}

export default TreeView;