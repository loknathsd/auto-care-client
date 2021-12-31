import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Mechanics from '../Mechanics/Mechanics';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <ChooseUs></ChooseUs>
            <Services></Services>
            <Mechanics></Mechanics>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;