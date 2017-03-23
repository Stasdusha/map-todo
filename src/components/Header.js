import React from "react";

const Header =(props)=> {

  return (
       <header className="tooltip" data-tooltip="Sorry! Not supported yet ">
         <div className='header__right-block'>
           <div className='header__item header__item_active'>JobUp</div>
           <div className='header__item'>DASHBORD</div>
           <div className='header__item'>HISTORY</div>
         </div>
         <div className='header__item_left'>PROFILE</div>
       </header>
   );
}

export default Header;
