import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navigation from '../Navigation/Navigation';
// import Navbar from '../Navigation/Navbar'

const Header = () => {
    return (
        <div style={{backgroundColor: '#743BFC',color:'white'}}>
           <Navigation></Navigation>
            <HeaderMain></HeaderMain>
            
        </div>
    );
};

export default Header;