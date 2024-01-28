import React from 'react';
  
const Layout =({className, children}) =>{
    return(
        <div className={`container ${className}`}>
            {children}
        </div>
    )
}
   
export default Layout;