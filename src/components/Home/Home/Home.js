import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import HomePlants from '../HomePlants/HomePlants';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomePlants></HomePlants>
            <ExtraSection/>
            <CustomerReviews></CustomerReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;